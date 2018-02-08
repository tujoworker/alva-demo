/* eslint react/style-prop-object: 0 */
/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import '../styles/Home.css'
import { inject, observer } from 'mobx-react'
import {
  injectIntl,
  FormattedDate,
  // FormattedTime,
  // FormattedRelative,
  FormattedNumber,
  // FormattedPlural,
  FormattedMessage
  // FormattedHTMLMessage
} from 'react-intl'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import Container from '../components/Wrapper'
import Svg from '../components/assets/Svg'

// import logoImg from '../assets/logo.png'

@injectIntl
@inject('locale')
@withRouter
@observer
export default class Home extends Component {
  // docs (or use ptd): https://github.com/facebook/prop-types#usage
  static propTypes = {
    locale: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
  }
  state = {
    x: 100000.5,
    name: 'Tobias',
    unreadCount: 1000
  }
  componentDidMount() {
    this.setState({
      x: 200000.5
    })
    // import('../worker/demo')
    // console.log('this.props.history', this.props.history);
    // this.to = setTimeout(() => {
    // console.log('done');
    // this.props.history.push('x');//to trigger componentWillUnmount
    // }, 2e3);
    // this._animeRef.anime.play();
    // setTimeout(() => {
    // }, 1e3);
  }
  // componentDidUpdate() {
  // this._animeRef.anime.play();
  // setTimeout(() => {
  // }, 100);
  // }
  // componentWillUpdate() {
  // this._animeRef.anime.play();
  // setTimeout(() => {
  // }, 100);
  // }
  componentWillUnmount() {
    clearTimeout(this.to)
    // this._animeRef.anime.play();
    // setTimeout(() => {
    // }, 100);
  }
  // componentWillReceiveProps() {
  // this._animeRef.anime.play();
  // setTimeout(() => {
  // }, 100);
  // }
  // shouldComponentUpdate() {
  //     return false;
  // }
  render() {
    // console.log('props', this.props);
    // console.log('this', this);
    const { name, unreadCount } = this.state
    const { formatMessage } = this.props.intl
    let { locale } = this.props

    // console.log(
    //     '?',
    //     formatMessage(
    //         {
    //             id: 'hello'
    //             // defaultMessage: 'X',
    //         },
    //         // { name: 'Tobias' }
    //         { name: <b>{name}</b> }
    //     )
    // );

    // to

    return (
      <Container>
        <Svg />
        {/* <svg width="600px" height="600px" viewBox="-300 -300 600 600"
				  xmlns="http://www.w3.org/2000/svg" version="1.1"
				  xmlns:xlink="http://www.w3.org/1999/xlink"> */}
        {/* <img src={logoImg} alt="" /> */}
        {/* <img src="/assets/logo.png" alt="logo" /> */}
        {/* <Anime
					easing="easeOutElastic"
					duration={2e3}
					scale={[0.9, 1]}
					opacity={[0, 1]}
					delay={1e3}
					autoplay={false}
					style={{
						opacity: 0
					}}
					ref={ref => {
						// console.log('ref', ref);
						this._animeRef = ref
					}}
					// begin={e => {
					//     console.log('begin', e);
					// }}
					// update={e => {
					//     console.log('update', e);
					// }}
					// complete={e => {
					//     console.log('complete', e);
					// }}
					>
				</Anime> */}
        <h3>
          To show Details about a Norwegian Railway, start typing ...
        </h3>
        {/* <p>
                    <FormattedMessage
                        id="welcome"
                        defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                        values={{ name: <b>{name}</b>, unreadCount }}
                    />
                </p> */}
        <p>
          <FormattedMessage
            id="hello"
            values={{ name: <b>{name}</b>, unreadCount }}
          />
        </p>
        <p>
          <FormattedDate value={new Date(1459832991883)} />
        </p>
        <p>
          <FormattedNumber
            value={this.state.x}
            style="currency"
            // useGrouping={false}
            // style: 'decimal' | 'currency' | 'percent' = 'decimal'
            currency="NOK"
            // currencyDisplay="code"
            // currencyDisplay: 'symbol' | 'code' | 'name' = 'symbol',
            // maximumFractionDigits={3}
          />
          {/* <FormattedMessage id="price" values={{ price: 1000 }} /> */}
          {/* <FormattedNumber value={1000} format="USD" /> */}
        </p>
        <p>
          {formatMessage(
            {
              id: 'hello'
              // defaultMessage: 'X',
            },
            { name: locale.value }
            // { name: <b>{name}</b> }
          )}
        </p>
        {/* <p>{formatMessage(messages.enUSDescription)}</p> */}
      </Container>
    )
  }
}
