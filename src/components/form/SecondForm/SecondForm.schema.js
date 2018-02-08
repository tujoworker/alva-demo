/**
 * Form Model
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Form } from 'mobx-react-form' // https://foxhound87.github.io/mobx-react-form/docs
import validatorjs from 'validatorjs' // https://github.com/skaterdav85/validatorjs
import { L } from '../../../core/startup/locales'

export default class FormModel extends Form {
  setup() {
    return {
      fields: [
        {
          name: 'email',
          label: L('form.email.label'),
          // label: 'Email',
          placeholder: L('form.email.placeholder'),
          rules: 'required|email|string|between:5,25'
          // value: 's.jobs@apple.com'
          // define also multiple observers:
          // observers: [
          // 	{
          // 		key: 'value', // can be any prop
          // 		call: ({ change }) => console.log('changed', change.newValue) //props: form, field, path, change
          // 	}
          // ]
        },
        {
          name: 'password',
          label: L('form.password.label'),
          placeholder: L('form.password.placeholder'),
          rules: 'required|string|between:5,200'
        },
        {
          name: 'passwordConfirm',
          label: L('form.password.confirm.label'),
          placeholder: L('form.password.confirm.placeholder'),
          rules: 'required|string|same:password'
        }
      ]
    }
  }

  hooks() {
    return {
      // onSuccess(form) {
      // 	// console.log('Form Values!', form.values())
      // 	this.props.onSuccess(form.values())
      // },

      onError(form) {
        console.log('All form errors', form.errors())
        // this.props.onError(form.values())
      }
    }
  }

  plugins() {
    return { dvr: validatorjs } //dvr = Declarative Validation Rules / validatorjs
  }
}
