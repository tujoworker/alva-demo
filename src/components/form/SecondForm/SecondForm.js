/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import './SecondForm.css'
// import '../../../styles/form.css'

// import { reaction } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import anime from 'animejs'

import { FormattedMessage } from 'react-intl'

import Config from '../../../config/Config'
import Container from '../../Wrapper'
import FormModel from './SecondForm.schema'
import FormStyle from '../FormStyles'
import SimpleInput from '../../form/inputs/SimpleInput'

// import { L } from '../../core/startup/locales'

@withRouter
@inject('store')
@observer
export default class Form extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onSubmit: PropTypes.oneOf([PropTypes.function, null])
  }
  static defaultProps = {
    onSubmit: null
  }
  constructor(props) {
    super(props)
    this.form = new FormModel({
      // to get this work the types.optional should not "reset" the value with ''
      // fields: [
      // 	{
      // 		name: 'email', //optional
      // 		value: 'daniela@tujo.no'
      // 	}
      // ]
      // onSuccess: form => {}
    })
    // this.form.$hooks.onSuccess = form => {
    // 	console.log('Form Values!', form.values())
    // }
    // this.form.$hooks.onError = form => {
    // 	console.log('All form errors', form.errors())
    // 	this.submit.bind(this)
    // }
    this.form.$hooks.onSuccess = this.submit.bind(this)
    this.form.$hooks.onError = this.submit.bind(this)
  }
  componentWillMount() {
    // console.log('this.form', this.form)
    this.form_disposer = this.props.store.regForm.bindForm(this.form)
    this.props.store.regForm.setLocation()

    //make sure we refresh the url, if we not have the requried values yet
    if (
      !this.props.store.regForm.hasRequiredData() &&
      !this.props.store.firstStep.hash
    ) {
      this.props.history.replace('/form/firststep')
    }
  }
  componentDidMount() {
    anime(
      Object.merge(Config.viewTransactionAnimationIn, {
        // targets: '.app__root form'
        targets: '.app__root .app__content_inner',
        duration: this.props.store.spinner.slowFadeNextView ? 2e3 : 300
      })
    )
    // TweenLite.fromTo(
    // 	'.app__root form',
    // 	0.6,
    // 	{
    // 		y: -10,
    // 		opacity: 0
    // 	},
    // 	{
    // 		y: 0,
    // 		opacity: 1
    // 	}
    // )
    // const tl = new TimelineLite()
    // tl.add(
    // )
    // tl.repeat(2)
  }
  componentWillUnmount() {
    this.form_disposer()
  }
  submit() {
    if (this.props.onSubmit) return this.props.onSubmit()
    // console.log(
    // 	'this.props.store.spinner.slowFadeNextView',
    // 	this.props.store.spinner.slowFadeNextView
    // )
    anime(
      Object.merge(Config.viewTransactionAnimationOut, {
        targets: '.app__root .app__content_inner',
        complete: () => {
          this.props.history.push('/form/third')
          // this.props.store.regForm.setLocation('/form/third')
        }
      })
    )
  }
  render() {
    // console.log('STORE', this.props.store)

    // const { form } = this.props
    return (
      <Container>
        <div css={FormStyle}>
          <form onSubmit={this.form.onSubmit}>
            <fieldset>
              {/* <SimpleInput field={this.form.$('name')} /> */}
              <SimpleInput field={this.form.$('email')} />
              <SimpleInput field={this.form.$('password')} />
              <SimpleInput field={this.form.$('passwordConfirm')} />

              <br />
              <button
                type="submit"
                className="action-button"
                onClick={this.form.onSubmit}
              >
                <FormattedMessage id="form.submit.label" />
              </button>

              {/* <button type="button" className="action-button" onClick={this.form.onClear}>
                                Clear
                                </button>
                                <button type="button" className="action-button" onClick={this.form.onReset}>
                                Reset
                            </button> */}

              <p>{this.form.error}</p>
            </fieldset>
          </form>
        </div>
      </Container>
    )
  }
}
