/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// Button Menu
// use also role="button"

// import './Menu.css'
// import { FormattedMessage } from 'react-intl'
import { NavLink } from 'alva/static'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'react-emotion'

@inject('locale')
export default class Menu extends Component {
  static propTypes = {
    locale: PropTypes.shape({
      L: PropTypes.func.isRequired
    }).isRequired
  }

  render() {
    return (
      <Nav>
        <NavLink exact to="/">
          {this.props.locale.L('menu.main.home')}
          {/* <FormattedMessage id="menu.main.blog" /> */}
        </NavLink>
        <NavLink to="/about">
          {this.props.locale.L('menu.main.about')}
        </NavLink>
        <NavLink to="/form">
          {this.props.locale.L('menu.main.form')}
        </NavLink>
        <NavLink to="/auth">
          {this.props.locale.L('menu.main.login')}
        </NavLink>
        <NavLink to="/dynamic">
          {this.props.locale.L('menu.main.dynamic')}
        </NavLink>
        <NavLink to="/blog">
          {this.props.locale.L('menu.main.blog')}
        </NavLink>
      </Nav>
    )
  }
}

const Nav = styled('nav')`
  ${'' /* font-size: 1.5em; */};
  ${'' /* white-space: nowrap; */} width: 100%;
  ${'' /* display: inline-block !important; */} background: #fff;

  a {
    padding: 0.8em;
    display: inline-block;
    text-decoration: none;
    font-style: normal;
    color: #000;
  }

  a.active {
    color: var(--main-bg-color);
  }
`
