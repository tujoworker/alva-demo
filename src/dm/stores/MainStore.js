/**
 * Form Store
 *
 * @flow
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import { reaction } from 'mobx'
import {
  types
  // hasParent,
  // getParent,
  // getSnapshot,
  // onSnapshot
} from 'mobx-state-tree'
import FirstStep from './RequiredStepStore'
import RegForm from './RegFormStore'
import Spinner from './SpinnerStore'

export const MainStore = types
  .model({
    body: types.optional(types.string, ''),
    // count: types.optional(types.number, 0),
    spinner: types.optional(Spinner, {}),
    // spinner: types.optional(types.frozen, { fadeIn: false }),
    firstStep: types.optional(FirstStep, {}),
    regForm: types.optional(RegForm, {})
  })
  .views(self => ({
    // get countNumber() {
    // 	return self.count
    // }
  }))
  .actions(self => ({
    // increase() {
    // 	self.count++
    // },
    setBody(content) {
      self.body = content
    }
    // bindForm({ model, form, resolve, defaultValues = {} }) {
    // 	//bind the store model to the form model
    // 	form.set('value', Object.extend(defaultValues, getSnapshot(model)))
    // 	onSnapshot(model, snapshot => {
    // 		form.set('value', snapshot)
    // 	})
    //
    // 	// console.log('model.props.fields', model.props)
    // 	// model.props.fields = form.fields
    // 	// model.props.fields.replace(form.fields)
    // 	// model.props.replace(form.fields)
    // 	// console.log('model.props', model.props.fields.keys())
    // 	// model.props = form;
    //
    // 	//and then, react on form value changes
    // 	return reaction(
    // 		() => form.values(),
    // 		values => {
    // 			if (typeof resolve === 'function') {
    // 				// resolve({
    // 				// 	values,
    // 				// 	model,
    // 				// 	parent: hasParent(model) ? getParent(model) : null
    // 				// })
    // 			} else {
    // 				// model.setProps(values)
    // 			}
    // 		}
    // 	)
    // }
  }))

export default MainStore.create({
  // regForm: {
  // id: 1,
  // email: 'tobias@tujo.no'
  // password: '',
  // passwordConfirm: ''
  // }
  // customForm: [
  // 	{
  // 		id: 1,
  // 		email: 'tobias@tujo.no',
  // 		// foo: 'bar',
  // 		password: '',
  // 		passwordConfirm: ''
  // 	}
  // 	// {
  // 	// 	text: 'learn MST',
  // 	// 	completed: false,
  // 	// 	id: 1
  // 	// }
  // ],
  // selectedForm: 1
})
