/**
 * Form Model
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Form } from 'mobx-react-form' // https://foxhound87.github.io/mobx-react-form/docs
import validatorjs from 'validatorjs' // https://github.com/skaterdav85/validatorjs
import { L } from '../../../core/startup/locales'

// import history from '../../../core/routing/History'

export default class FormModel extends Form {
  constructor(props) {
    super(props)
    this.props = props
  }

  setup() {
    return {
      fields: [
        {
          name: 'nr',
          label: L('form.nr.label'),
          placeholder: L('form.nr.placeholder'),
          rules: ['required', 'numeric', 'regex:/^[0-9]{6,11}$/']
        }
      ]
    }
  }

  hooks() {
    return {
      // onSuccess(form) {
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
