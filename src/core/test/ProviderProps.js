/**
 * Storybook Provider
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

import { MobxIntlProvider, localeStore } from '../startup/locales'
import history from '../routing/History'
import MainStore from '../../dm/stores/MainStore'

import extend from 'lodash.merge'

// make Object.merge global aviable
Object.merge = (...args) => {
  args.unshift({})
  return extend.apply(extend, args)
} // used merge before, but the "array-includes-with-glob" is not ES5 code in the npm package, so this causes troubles on the build / UglifyJsPlugin process
Object.extend = extend

// make sure the lang is set to en

const ProviderSimulation = props => {
  localeStore.value = props.lang || 'en'
  return (
    <Provider locale={localeStore} store={MainStore}>
      <MobxIntlProvider>
        <Router history={history}>{props.children}</Router>
      </MobxIntlProvider>
    </Provider>
  )
}
ProviderSimulation.propTypes = {
  children: PropTypes.node.isRequired
}

export default {
  Provider: ProviderSimulation,
  history,
  store: MainStore
  // MobxIntlProvider,
  // locale: localeStore
}
