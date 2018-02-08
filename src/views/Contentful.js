/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { withRouteData } from 'alva/static'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container } from '../components/Wrapper'

@withRouteData
export default class Contentful extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired
  }
  render() {
    return <Container>{this.props.body}</Container>
  }
}
