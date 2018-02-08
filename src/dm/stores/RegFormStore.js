/**
 * Form Store
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { reaction } from 'mobx'
import {
  types,
  getRoot,
  onSnapshot,
  getSnapshot,
  applySnapshot
} from 'mobx-state-tree'

import GraphQL from '../GraphQL'
import RegFormModel from '../models/RegFormModel'
import RequiredStep from '../../components/form/RequiredStep/RequiredStep.schema'
import history from '../../core/routing/History'

const Fields = types.model('Fields', RegFormModel)
const Navigation = types.model('Navigation', {
  location: types.optional(types.frozen, {})
})
const Props = types.model('Props', {
  // fields: types.optional(types.map(types.frozen), {})
  fields: types.optional(Fields, {}),
  navigation: types.optional(Navigation, {})
  // created: types.optional(types.Date, () => new Date())
})

// in case we with to use or wnat to inklude the backend
const makeBackendConnection = false

export default types
  .model('RegStore', {
    tmp: types.optional(Fields, {}),
    props: types.optional(Props, {})
    // props: types.optional(types.map({}), {})
    // props: types.optional(types.map({ fields: types.map(types.frozen) }), {})
  })
  .views(self => ({
    get ignoreLoadFieldsContent() {
      return /^(__)|^(id|password)$/i
    }
  }))
  .actions(self => ({
    bindForm(form, defaultValues = {}) {
      if (!self.propsDefault) self.propsDefault = getSnapshot(self.props)

      // bind the store model to the form model
      form.set(
        'value',
        Object.extend(defaultValues, getSnapshot(self.props.fields))
      )

      // store the values in the store
      self.mergeData({ fields: form.values() })

      // react on form value changes
      const disp1 = reaction(
        () => form.values(),
        values => self.mergeData({ fields: values })
      )

      // react on field changes in the store and send them to the form
      const disp2 = onSnapshot(self.props.fields, snapshot =>
        form.set('value', snapshot)
      )

      // react on props changes, so we can save these, e.g. on the server
      const disp3 = onSnapshot(self.props, self.applyData)

      // make it possible to dispatch the listeners
      return () => {
        disp1()
        disp2()
        disp3()
      }
    },
    mergeData(props) {
      // console.log('mergeData', props)
      self.props = Object.extend(self.props, props) // If we use Fields model
      return self
    },
    applyData(props) {
      // console.log('applyData', props)
      // a NOT so important history relocation, so we do not log errors
      try {
        if (
          history.location !== props.navigation.location
          // self.props.navigation.location !== props.navigation.location
        ) {
          history.push(props.navigation.location)
        }
      } catch (e) {}

      self.writeToSession(props)
    },
    setTmpFields(values) {
      self.tmp = Object.extend(self.tmp, values) // If we use Fields model
    },
    setLocation(path) {
      if (path) history.push(path)
      self.props.navigation.location = history.location
      return self
    },
    reset() {
      if (self.propsDefault) applySnapshot(self.props, self.propsDefault)
    },
    preventCommit() {
      self._preventCommit = true
      if (self._preventCommitTO) clearTimeout(self._preventCommitTO)
      self._preventCommitTO = setTimeout(() => {
        self._preventCommit = false
      }, 20)
      return self
    },
    applyNewRegData() {
      self
        .preventCommit()
        .mergeData(self.tmp)
        .applyData(self.tmp)
    },
    readFromSession() {
      self.readAndSetFromSession().then(resp => {
        try {
          console.log('readAndSetFromSession', resp)
          // if (resp && resp.data.getTmpReg) {
          // }
          const { getTmpReg } = resp.data
          self.preventCommit().mergeData(getTmpReg)
          getRoot(self).firstStep.mergeData({
            nr: getTmpReg.fields.nr
          })
        } catch (e) {
          console.log('Error on getTmpReg resp', e)
        }
        return resp
      })
    },
    hasRequiredData() {
      const field = new RequiredStep({})
        .setup()
        .fields.find(obj => obj.name === 'nr')
      if (!field.rules) return true
      const regexp = field.rules
        .find(str => /regex/.test(str))
        .match(/\/(.*)\//)[1]
      return new RegExp(regexp).test(
        getRoot(self).firstStep.props.fields.nr
        // getRoot(self).firstStep.props.fields.get('nr')
      ) // important that we use the direct value here!
    },
    mutateTmpReg(obj = {}) {
      if (self._preventCommit) return

      // const fields = obj.fields.toJS()
      const data = Object.extend({}, self.props, obj)
      Object.keys(self.props.fields)
        .filter(k => new RegExp(self.ignoreLoadFieldsContent).test(k))
        .map(k => delete data[k])

      const fS = getRoot(self).firstStep
      data.hash = fS.hash
      data.ssid = fS.SSID
      data.fields.nr = fS.props.fields.nr

      console.log('writeToSession', data)

      const mutation = `
				mutation Reg($hash: String!, $json: JSON!) {
				  setTmpReg(hash: $hash, input: {json: $json}) {
					fields {
					  name
					  #email
					}
				  }
				}
			`

      //we do have to store nr as well
      GraphQL.set(mutation, {
        hash: data.hash,
        // json: data
        json: JSON.stringify(data)
      })
        .then(resp => {
          return resp
        })
        .catch(e => {
          console.log('Error', e)
          // TODO: showError has to be implemented
          // this.showError(e)
        })
    },
    writeToSession(obj) {
      clearTimeout(self.typing_delay)
      self.typing_delay = setTimeout(() => self.mutateTmpReg(obj), 500)
    },
    readAndSetFromSession(opts = {}) {
      // const fields = self.props.fields.keys()
      const fields = Object.keys(self.props.fields).filter(
        k => !new RegExp(self.ignoreLoadFieldsContent).test(k)
      )
      // return Promise.resolve()
      //we do have to store hash as well
      const query = `
				query Reg($hash: String, $ssid: String) {
					getTmpReg(hash: $hash, ssid: $ssid) {
						fields {
							${fields.join('\n')}
							#nr
							#ssid
						}
						${opts.queryFields || ''}
					}
				}
			`
      const vars = {
        ssid: getRoot(self).firstStep.SSID,
        hash: getRoot(self).firstStep.hash
      }
      if (!vars.ssid && !vars.hash) return Promise.resolve()
      return GraphQL.get(query, vars).catch(e => {
        console.log('Error', e)
        // this.showError(e)
      })
    },
    afterAttach() {
      if (
        typeof document !== 'undefined' &&
        process.env.NODE_ENV !== 'test' &&
        makeBackendConnection
      ) {
        self.readFromSession()
      }
    }
  }))
