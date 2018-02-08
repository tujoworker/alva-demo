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
          name: 'name',
          label: L('form.name.label'),
          placeholder: L('form.name.placeholder'),
          rules: 'required|string|between:5,25'
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
