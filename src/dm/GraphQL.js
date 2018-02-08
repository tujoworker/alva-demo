/**
 * DataManager API
 * A kind of helpter class
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { split } from 'apollo-link'
import gql from 'graphql-tag'

// import { SubscriptionClient } from 'subscriptions-transport-ws'

import Config from '../config/Config'
// console.log('WebSocketLink', typeof WebSocketLink)
// console.log('SubscriptionClient', SubscriptionClient)
// console.log('global.WebSocket', global.WebSocket)

// import fetch from 'node-fetch' // actually only used for the export process, cause there is window.fetch not aviable
// import fetch from 'isomorphic-fetch'

let client = {
  query: () => {}
}
if (typeof document !== 'undefined') {
  const httpLink = new HttpLink({
    uri: `${(typeof window !== 'undefined' && window.location.protocol) ||
      ''}//${Config.graphqlUri}`,
    // fetch: fetch,
    opts: {
      // Additional fetch options like `credentials` or `headers`
      credentials: 'include'
      // credentials: 'same-origin'
    }
  })
  // Generates an error "eventemitter3_1.EventEmitter is not a constructor" - to fix this we have to add eventemitter3@2.0.3
  // const wsClient = SubscriptionClient(
  // 	`ws://localhost:5000`,
  // 	{
  // 		reconnect: true
  // 	},
  // 	global.WebSocket
  // )
  const wsLink = httpLink
  // const wsLink = new WebSocketLink(wsClient)
  // We still need to have subscriptions-transport-ws in as a dependency
  // const wsLink = new WebSocketLink({
  // 	uri: `ws://localhost:5000/`,
  // 	options: {
  // 		reconnect: true
  // 		// connectionParams: {
  // 		// 	authToken: user.authToken
  // 		// }
  // 	}
  // })
  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
  )
  // const link = httpLink
  // could be replaced with a mobx store
  const cache = new InMemoryCache()
  client = new ApolloClient({
    link,
    cache
  })
}

class DataHandler {
  async get(query, variables) {
    return client.query({
      query: gql`
        ${query}
      `,
      variables: variables
    })
  }
  // async subscription(query, variables) {
  // 	return client.query({
  // 		query: gql`${query}`,
  // 		variables: variables
  // 	})
  // }
  async set(mutation, variables) {
    return client.mutate({
      mutation: gql`
        ${mutation}
      `,
      variables: variables
    })
  }
}

export { gql, client }

export default new DataHandler()
