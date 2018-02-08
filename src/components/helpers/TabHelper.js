import { css } from 'react-emotion'
import React, { Component } from 'react'
// import { inject } from 'mobx-react'

const tabHelper = css`
  position: relative;
  display: block;
  height: 1px;
  margin-bottom: -1px;
  padding: 0;

  color: white;
  text-decoration: underline;
  font-size: 24px;
  background: transparent;

  span {
    position: absolute;
    display: block;
    top: -900px;
    text-align: center;
  }
`
// @inject('locale')
export default class TabHelper extends Component {
  render() {
    return (
      <a href="#main_content" tabIndex="1" css={tabHelper}>
        <span>Skip to main content</span>
        {/* <span>{this.props.locale.L('core.tab_helper')}</span> */}
      </a>
    )
  }
}
