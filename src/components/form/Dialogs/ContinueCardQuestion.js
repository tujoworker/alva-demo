/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import './ContinueCardQuestion.css'

import { FormattedMessage } from 'react-intl'
import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'

//in case we use this.props.history.push to navigate to a new location
// import { withRouter } from 'react-router-dom' // reacttraining.com/react-router/web/api/

import Config from '../../../config/Config'

// @withRouter
@inject('store')
@observer
export default class Form extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
    // tmpRegData: PropTypes.object.isRequired
  }
  submit() {
    anime(
      Object.merge(Config.viewTransactionAnimationOut, {
        targets: '.app__root .con_ca_q',
        complete: () => {
          this.props.onSubmit()
        }
      })
    )
  }
  render() {
    return (
      <div className="con_ca_q">
        <h1>Shure You want to Continue?</h1>
        <h2>{this.props.store.regForm.tmp.fields.name || 'empty'}</h2>
        <button
          type="submit"
          className="action-button"
          onClick={this.submit.bind(this)}
        >
          <FormattedMessage id="form.next.label" />
        </button>
      </div>
    )
  }
}

// Form.propTypes = {
// 	title: PropTypes.string.isRequired
// }
