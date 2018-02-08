/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import './RequiredStep.css'
// import '../../../styles/form.css'

import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import anime from 'animejs'

import { FormattedMessage } from 'react-intl'

import Config from '../../../config/Config'
import Container from '../../Wrapper'
import ContinueCardQuestion from '../Dialogs/ContinueCardQuestion'
import FormModel from './RequiredStep.schema'
import FormStyle from '../FormStyles'
import SimpleInput from '../../form/inputs/SimpleInput'

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
  state = {}
  constructor(props) {
    super(props)
    this.form = new FormModel({
      // onSuccess: () => this.submit(),
      // onError: form => {
      // 	console.log('All form errors', form.errors())
      // }
    })
    // console.log('this.form', this.form)
    this.form.$hooks.onSuccess = form => {
      console.log('Form Values!', form.values())
      this.submit()
    }
    this.form.$hooks.onError = form => {
      console.log('All form errors', form.errors())
    }
  }
  componentWillMount() {
    this.form_disposer = this.props.store.firstStep.bindForm(this.form)
    // this.form_disposer = this.props.store.regForm.bindForm(this.form)
  }
  componentDidMount() {
    anime(
      Object.merge(Config.viewTransactionAnimationIn, {
        targets: '.app__root form',
        delay: 100
      })
    )
  }
  componentWillUnmount() {
    this.form_disposer()
  }
  // onSuccess() {
  // 	console.log('onSuccess')
  // 	this.props.history.push('/form/second')
  // }
  applyNewRegData() {
    this.props.store.regForm.applyNewRegData()
    if (!this.props.store.regForm.props.navigation.location)
      this.props.history.push('/form/first')
  }
  submit() {
    if (this.props.onSubmit) return this.props.onSubmit()
    anime(
      Object.merge(Config.viewTransactionAnimationOut, {
        targets: '.app__root form',
        complete: () => {
          this.props.history.push('/form/first')
          // this.props.store.regForm.setLocation('/form/first')
        }
      })
    )
  }
  render() {
    // const { componentState } = this.props.store.firstStep
    return (
      <Container>
        <div css={FormStyle}>
          <h1>Name: {this.props.store.regForm.props.fields.name}</h1>
          {/* <h2>nr: {this.props.store.firstStep.props.fields.nr}</h2> */}
          {this.props.store.firstStep.showContinueCardQuestion && (
            <ContinueCardQuestion
              onSubmit={this.applyNewRegData.bind(this)}
            />
          )}
          <form onSubmit={this.form.onSubmit}>
            <fieldset>
              <SimpleInput field={this.form.$('nr')} />

              <br />
              <button
                type="submit"
                className="action-button"
                onClick={this.form.onSubmit}
              >
                <FormattedMessage id="form.next.label" />
              </button>

              <p>{this.form.error}</p>
            </fieldset>
          </form>
        </div>
      </Container>
    )
  }
}
