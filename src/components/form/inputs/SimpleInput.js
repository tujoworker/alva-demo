/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import anime from 'animejs'

@observer
class Input extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
  }
  static defaultProps = {
    placeholder: null,
    type: null
  }
  focus() {
    if (this.props.field.error && this._ErrMsgRef) {
      try {
        this._ErrMsgRef.hide()
        this._ErrMsgRef = null
      } catch (e) {}
    }
  }
  render() {
    const { field, type = 'text', placeholder = null } = this.props
    return (
      <div className="input_set">
        <label htmlFor={field.id}>{field.label}</label>
        <span className="form_con">
          <input
            {...field.bind({ type, placeholder })}
            onFocus={this.focus.bind(this)}
          />
          {field.error && (
            <ErrMsg {...this.props} ref={ref => (this._ErrMsgRef = ref)} />
          )}
        </span>
      </div>
    )
  }
}

class ErrMsg extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired
  }
  componentDidMount() {
    anime({
      targets: this._ref,
      easing: 'easeOutSine',
      translateX: [{ value: -5, duration: 0 }, 0],
      opacity: [0, 1],
      duration: 600,
      delay: 100
    })
  }
  componentWillUnmount() {
    this._ref = null
  }
  hide() {
    anime({
      targets: this._ref,
      easing: 'easeOutSine',
      opacity: [1, 0],

      //first fx
      translateX: [{ value: 5, duration: 300 }],
      duration: 400,

      //second fx
      // scale: [1, 1.8s],
      // duration: 300,

      complete: () => {
        try {
          this.props.field.showErrors(false)
        } catch (e) {}
      }
    })
  }
  render() {
    return (
      <span
        className="err_msg"
        ref={ref => (this._ref = ref)}
        onMouseDown={this.hide.bind(this)}
      >
        {this.props.field.error}
      </span>
    )
  }
}

export default Input
