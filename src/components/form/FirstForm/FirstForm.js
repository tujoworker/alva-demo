/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import compStyles from './FirstForm.css'
// import style from '../../../styles/form.css'

// import { reaction } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import anime from 'animejs'

import { FormattedMessage } from 'react-intl'

import Config from '../../../config/Config'
import Container from '../../Wrapper'
import FormModel from './FirstForm.schema'
import FormStyle from '../FormStyles'
import SimpleInput from '../../form/inputs/SimpleInput'

// console.log('style', style)
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
    })
    // Else we can do this!
    this.form.$hooks.onSuccess = this.submit.bind(this)
    this.form.$hooks.onError = form => {
      console.log('All form errors', form.errors())
    }
  }
  componentWillMount() {
    // console.log('this.form', this.form)
    // console.log('regForm', this.props.history)
    this.form_disposer = this.props.store.regForm.bindForm(this.form)
    this.props.store.regForm.setLocation()
    // readFromSession
    // console.log(
    // 	'this.props.store.firstStep.hash',
    // 	this.props.store.firstStep.hash
    // )
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
        targets: '.app__root form'
      })
    )
    // anime({
    // 	targets: '.app__root .app__content_inner',
    // 	easing: 'easeOutSine',
    // 	scale: [{ value: 0.95, duration: 220, delay: 100 }]
    // 	// translateX: [{ value: -100, duration: 400, delay: 300 }]
    // })
  }
  componentWillUnmount() {
    this.form_disposer()
  }
  submit(form) {
    if (this.props.onSubmit) return this.props.onSubmit(form)

    this.props.store.spinner.setFadeIn()
    this.props.store.spinner.setSlowFadeNextView()
    anime(
      Object.merge(Config.viewTransactionAnimationOutFX, {
        targets: '.app__root .app__content_inner',
        complete: () => {
          console.log('Form Values!', form.values())
          this.props.history.push('/form/second')
          // this.props.store.regForm.setLocation('/form/second')
        }
      })
    )
  }

  // css constructor
  // @css`
  // 	font-size: 2em;
  // 	color: {this.props.color};
  //
  // 	display: flex;
  //
  // 	&:hover {
  // 		color: red;
  // 	}
  //
  // 	form {
  // 		border-radius: 50%;
  // 	}
  // 	#handle {
  // 		margin-top: 20px;
  // 	}
  //
  // 	@media (max-width: 600px) {
  // 		& {
  // 			font-size: 2em;
  // 		}
  // 	}
  // `

  render() {
    // console.log('STORE', this.props.store)

    // const { form } = this.props
    return (
      <Container>
        <div css={FormStyle}>
          <form onSubmit={this.form.onSubmit}>
            <fieldset>
              <SimpleInput field={this.form.$('name')} />
              {/* <SimpleInput field={this.form.$('email')} />
								<SimpleInput field={this.form.$('password')} />
							<SimpleInput field={this.form.$('passwordConfirm')} /> */}

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
