/**
 * Form Store
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { types } from 'mobx-state-tree'

console.log('SecondStore!')

export const SecondStore = types
  .model({
    body: types.optional(types.string, ''),
    count: types.optional(types.number, 0)
  })
  .views(self => ({
    get countNumber() {
      return self.count
    }
  }))
  .actions(self => ({
    increase() {
      self.count++
    },
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

export default SecondStore.create({})
