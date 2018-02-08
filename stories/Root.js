/**
 * Storybook Root
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import 'normalize.css/normalize.css'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

import AppStyle from '../src/styles/AppStyle'

injectTapEventPlugin()

export default class RootClass extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  // static defaultProps = {}
  render() {
    return (
      <div id="alva_demo" css={AppStyle}>
        <div className="react-static">{this.props.children}</div>
      </div>
    )
  }
}
