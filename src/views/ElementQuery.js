import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { ElementQueries } from 'css-element-queries'

const style = css`
  h2 {
    padding: 1em;
    margin-top: 2em;
    color: red;
    font-size: 1em;
    text-align: center;
  }

  &[min-width~='400px'] h2 {
    margin-top: 6em;
    color: blue;
    font-size: 1em;
  }

  &[min-width~='600px'] h2 {
    margin-top: 0;
    color: green;
    font-size: 3em;
  }

  &[min-width~='700px'] h2 {
    margin-top: 0;
    color: pink;
    font-size: 4em;
  }

  &[min-width~='800px'] h2 {
    margin-top: 0;
    color: Coral;
    font-size: 4em;
  }
`

//attaches to DOMLoadContent, or use ElementQueries.init() after componentDidMount
// ElementQueries.listen()

export default class QL extends Component {
  componentDidMount() {
    // works much better than .listen()
    ElementQueries.init()
  }

  render() {
    return (
      <div css={style}>
        <h2>Element responsiveness</h2>
        <div data-responsive-image>
          <img
            data-src="http://placehold.it/350x150"
            alt="Some description ..."
          />
          <img
            min-width="350"
            data-src="http://placehold.it/700x300"
            alt="Some description ..."
          />
          <img
            min-width="700"
            data-src="http://placehold.it/1400x600"
            alt="Some description ..."
          />
        </div>
      </div>
    )
  }
}
