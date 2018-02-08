/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Head } from 'alva/static'
import React, { Component } from 'react'

import { Container } from '../components/Wrapper'
import ExampleMarkdown from '../markdown/example.md'

// use highlightjs.org for code formation

export default class Firebase extends Component {
  render() {
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"
          />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js" />
        </Head>
        <div dangerouslySetInnerHTML={{ __html: ExampleMarkdown }} />
      </Container>
    )
  }
}
