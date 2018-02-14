/**
 * Main App Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Provider } from 'mobx-react'
import { Router } from 'alva/static'
// import { Router } from 'react-router-dom'
import React, { Component } from 'react'
// import { hot } from 'react-hot-loader'

import { MobxIntlProvider, localeStore } from './core/startup/locales'
import AppStyle from './styles/AppStyle'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainStore from './dm/stores/MainStore'
import Routing from './core/routing/MainRouting'
import history from './core/routing/History'

export default class App extends Component {
  render() {
    return (
      <Provider locale={localeStore} store={MainStore}>
        <MobxIntlProvider>
          <Router history={history}>
            <div className="app__root" css={AppStyle}>
              <Header />
              <Routing />
              <Footer />
            </div>
          </Router>
        </MobxIntlProvider>
      </Provider>
    )
  }
}

// export default hot(module)(App)
