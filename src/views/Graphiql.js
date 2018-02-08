/**
 * Graphiql Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import 'graphiql/graphiql.css'

import { injectGlobal } from 'react-emotion'
import GraphiQL from 'graphiql'
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Config from '../config/Config'

injectGlobal`
    html, body, #root, .app__root, #main_content {
        margin: 0;
        width: 100%;
        height: 100%;
        ${'' /* overflow: hidden; */}
    }
`

const graphQLFetcher =
  typeof window !== 'undefined' &&
  (graphQLParams =>
    fetch(
      `${(typeof window !== 'undefined' && window.location.protocol) ||
        ''}//${Config.graphqlUri}`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams)
      }
    ).then(response => response.json()))

export default class Graphiql extends Component {
  render() {
    return (
      <GraphiQL
        fetcher={graphQLFetcher}
        query={`
					query Reg($hash: String) {
					  getTmpReg(hash: $hash) {
					    fields {
					      name

					    }
					  }
					}
				`}
        variables={JSON.stringify({
          hash: '93279e3308bdbbeed946fc965017f67a'
        })}
      />
    )
  }
}
