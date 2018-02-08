/**
 * Form Store
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { reaction } from 'mobx'
import { types, getRoot, getSnapshot, onSnapshot } from 'mobx-state-tree'
import Cookie from 'js-cookie'
import md5 from 'md5'

// import history from '../../core/routing/History'

const Fields = types.model('Fields', {
  nr: types.optional(types.string, '')
})
// const Navigation = types.model('Navigation', {
// 	location: types.optional(types.string, '')
// })
const Props = types.model('Props', {
  fields: types.optional(Fields, {})
  // navigation: types.optional(Navigation, {})
})

export default types
  .model('FirstStore', {
    // id: types.optional(types.identifier(types.number), 1), // id is needed once we use .reference()
    activeSearchMode: false,
    showContinueCardQuestion: false,
    // _componentState: types.optional(types.map(types.frozen), {}),
    _hash: types.optional(types.string, ''),
    props: types.optional(Props, {})
    // tmp: types.optional(types.frozen, {})
  })
  .views(self => ({
    // get componentState() {
    // 	return self._componentState.toJS()
    // },
    get SSID() {
      return Cookie.get('SSID')
    },
    get hash() {
      // if (!self._hash) self.writeToLocalStorage()
      // return self.props.fields.get('nr')
      return self.props.fields.nr ? md5(self.props.fields.nr) : self._hash
    }
  }))
  .actions(self => ({
    bindForm(form, defaultValues = {}) {
      //bind the store model to the form model
      form.set(
        'value',
        Object.extend(defaultValues, getSnapshot(self.props.fields))
      )
      self.mergeData({ fields: form.values() })
      const disp1 = onSnapshot(self.props.fields, snapshot => {
        // console.log('onSnapshot first step', snapshot)
        form.set('value', snapshot)
      })
      // const x3 = onSnapshot(self.hash, snapshot => {
      // 	form.set('value', snapshot)
      // })
      // self.mergeData(getRoot(self).regForm.props.fields)

      //and then, react on form value changes
      const disp2 = reaction(
        () => form.values(),
        values => {
          self.mergeData({ fields: values })
        }
      )

      //and then, react on form value changes
      return () => {
        disp1()
        disp2()
      }
    },
    mergeData(values) {
      // self.props.fields.merge(values) // if we use map with types.frozen
      self.props = Object.extend(self.props, values) // If we use Fields model
    },
    // setTmpFields(values) {
    // 	self.tmp = Object.extend(self.tmp, values)
    // 	// Object.extend(self.tmp, values) // If we use Fields model
    // },
    setShowContinueCardQuestion(state) {
      self.showContinueCardQuestion = state
    },
    setActiveSearchMode(mode) {
      return (self.activeSearchMode = mode)
    },
    afterAttach() {
      if (
        typeof window !== 'undefined' &&
        typeof window.localStorage !== 'undefined' &&
        process.env.NODE_ENV !== 'test'
      ) {
        self.readFromLocalStorage()
      }

      reaction(
        () => self.props.fields.nr,
        nr => {
          self.writeToLocalStorage()
          if (
            self.activeSearchMode &&
            getRoot(self).regForm.hasRequiredData()
          ) {
            self.search()
          } else self.setActiveSearchMode(true)
        }
      )
    },
    writeToLocalStorage() {
      if (typeof window !== 'undefined')
        window.localStorage.setItem('form.hash', self.hash)
    },
    readFromLocalStorage() {
      const hash =
        typeof window !== 'undefined' &&
        window.localStorage.getItem('form.hash')
      if (hash) self._hash = hash
    },
    search() {
      getRoot(self)
        .regForm.readAndSetFromSession({
          queryFields: `
						navigation {
							location
						}
					`
        })
        .then(resp => {
          // try {
          console.log('resp', resp.data)
          self.setActiveSearchMode(false)
          if (resp && resp.data.getTmpReg) {
            // history.push(resp.data.getTmpReg.navigation.location)
            getRoot(self).regForm.setTmpFields(resp.data.getTmpReg)
            // self.setTmpFields(resp.data.getTmpReg.fields)
            self.setShowContinueCardQuestion(true)
          } else {
            self.setShowContinueCardQuestion(false)
            getRoot(self).regForm.reset()
          }
          // } catch (e) {
          // 	console.log('Error on getTmpReg resp', e)
          // }
          return resp
        })
    }
  }))
