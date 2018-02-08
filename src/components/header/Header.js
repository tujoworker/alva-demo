/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import styled from 'react-emotion'

import ChangeLang from './ChangeLang'
import Menu from './Menu'

const HeaderComp = styled('header')`
  ${'' /* grid-column-start: main-start;
  grid-column-end: main-end;
  grid-row-start: main-start; */} height: 10em;
  /*margin-top: 1.5em;*/

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-size: 1.3em; /* We could use rem; here if HTML element has synamic font sizing! */
  background: blue;
`

// console.log('styles', style)

// @withRouter
// // @injectIntl
// @inject('store')
// @observer
export default class Header extends Component {
  // docs (or use ptd): https://github.com/facebook/prop-types#usage
  static propTypes = {
    foo: PropTypes.string
  }
  static defaultProps = {
    foo: ''
  }
  // componentDidMount() {
  // 	anime({
  // 	    targets: 'header',
  // 	    easing: 'easeOutExpo',
  // 	    // translateY: [{ value: -10, duration: 0 }, 0],
  // 	    backgroundColor: ['rgb(255, 50, 50)', 'rgb(255, 0, 0)'],
  // 	    duration: 2e3
  // 	})
  // }

  render() {
    // const { formatMessage } = this.props.intl
    // let { locale } = this.props
    // const c = this.props.locale.L('hello')
    // const c = this.props.locale
    // const c = this.props.locale.formatMessage('hello')
    // console.log('locale 1', c)
    // const c2 = this.props.locale.formatMessage({
    //     id: 'hello'
    //     // defaultMessage: 'X',
    // })
    // console.log('locale 2', c2)
    // const c3 = this.props.intl.formatMessage({
    //     id: 'hello'
    //     // defaultMessage: 'X',
    // })
    // console.log('locale 3', c3)

    return (
      <HeaderComp role="banner">
        <Menu />
        <ChangeLang />
        <Fragment>
          <span>Fragment!</span>
        </Fragment>
        {/* <FormattedMessage id="hello" values={{ name: <b>{'x'}</b> }} /> */}
        {/* {this.props.intl.formatMessage(
                    {
                        id: 'hello'
                        // defaultMessage: 'X',
                    },
                    { name: 'my name' }
                )} */}
        {/* <span>{this.props.locale.L('hello', { name: 'x' })}</span> */}
        {/* <span>{this.props.store.email}</span> */}
        {/* <p>
                    <FormattedNumber
                        value={1000}
                        style="currency"
                        currency="NOK"
                    />
                </p> */}
        {/* <Anime
                    easing="easeOutElastic"
                    duration={1e3}
                    scale={[0.9, 1]}
                    opacity={[0, 1]}
                    delay={1e3}
					>
                </Anime> */}
      </HeaderComp>
    )
  }
}
