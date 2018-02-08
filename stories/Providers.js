/**
 * Storybook Provider
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MobxIntlProvider, localeStore } from '../src/core/startup/locales'
import MainStore from '../src/dm/stores/MainStore'
// import { MainStore } from '../src/dm/stores/MainStore'
import history from '../src/core/routing/History'

// const store = MainStore.create({
//   regForm: {
//     props: {
//       fields: {
//         name: 'My Name'
//       }
//     }
//   }
// })

export default class ProviderClass extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <Provider locale={localeStore} store={MainStore}>
        <MobxIntlProvider>
          <Router history={history}>{this.props.children}</Router>
        </MobxIntlProvider>
      </Provider>
    )
  }
}
