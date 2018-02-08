/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import './Header.css'

import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { css } from 'react-emotion'

// import anime from 'animejs'
// import Anime from 'react-anime'

const style = css`
  font-size: 1.5em;
`

@inject('locale') //locale is only used to change the "locale"
@observer
export default class MyComponent extends Component {
  static propTypes = {
    locale: PropTypes.object.isRequired
    // tmpRegData: PropTypes.object.isRequired
  }
  // componentDidMount() {
  // anime({
  // 	targets: '.change_lang',
  // 	easing: 'easeOutSine',
  // 	// translateY: [{ value: -10, duration: 0 }, 0],
  // 	scale: [0.9, 1],
  // 	opacity: [0, 1],
  // 	duration: 600
  // })
  // }
  changelang = event => (this.props.locale.value = event.target.value)
  render() {
    return (
      <div className={style}>
        {/* <Anime
					easing="easeOutElastic"
					duration={1e3}
					scale={[0.9, 1]}
					opacity={[0, 1]}
					>
				</Anime> */}
        <select
          value={this.props.locale.value}
          onChange={this.changelang}
          aria-label={this.props.locale.L('settings.changelang')}
        >
          <option value="en">English</option>
          <option value="nb">Norsk</option>
        </select>
      </div>
    )
  }
}
