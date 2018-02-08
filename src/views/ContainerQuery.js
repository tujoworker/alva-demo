/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { ContainerQuery } from 'react-container-query'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { css } from 'react-emotion'
import classnames from 'classnames'

const query = {
  'width-between-400-and-599': {
    minWidth: 400,
    maxWidth: 599
  },
  'width-larger-than-600': {
    minWidth: 600
  }
}

const style = css`
  .box {
    background-color: red;
  }

  .width-between-400-and-599 {
    background-color: yellow;
  }

  .width-larger-than-600 {
    background-color: green;
  }

  ${'' /* .container:media(min-width: 400px) {
    .box {
      background-color: green;
    }
  }

  .container:media(min-width: 600px) {
    .box {
      background-color: blue;
    }
  } */};
`

export default class Comp extends Component {
  static defaultProps = {
    // containerQuery: 'width-larger-than-600'
  }
  // docs (or use ptd): https://github.com/facebook/prop-types#usage
  static propTypes = {
    containerQuery: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className={style}>
        <ContainerQuery query={query}>
          {params => (
            <div className={classnames('box', params)}>the box</div>
          )}
        </ContainerQuery>
      </div>
    )
  }
}
