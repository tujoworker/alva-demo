/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { getRouteProps } from 'alva/static'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container } from '../components/Wrapper'

@getRouteProps
export default class Contentful extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired
  }
  render() {
    return <Container>{this.props.body}</Container>
  }
}
