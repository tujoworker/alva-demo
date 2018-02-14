/**
 * This is the app starting point.
 * Here we inject the dom with react. And set the router provider.
 * How this works? Well, we have two main views. One is the Home, and the other is Details. These are defined as components in the views/Views class
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import 'alva/core'

import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from './App'

// performance optimization tool - https://github.com/reactopt/reactopt
if (false && process.env.NODE_ENV !== 'production') {
  const { reactopt } = require('reactopt')
  reactopt(React)
}

// Render your app
if (typeof document !== 'undefined') {
  const render = Comp => {
    // so we not get this error: "Warning: Expected server HTML to contain a matching <div> in <div>."
    // const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
    const renderMethod = module.hot
      ? ReactDOM.render
      : ReactDOM.hydrate || ReactDOM.render
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(require('./App').default)
    })
  }
}

// Export the top level component as JSX (for static rendering)
export default App
