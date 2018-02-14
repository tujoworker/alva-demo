/**
 * Form View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
//in case we use this.props.history.push to navigate to a new location
import { Route, Switch } from 'react-router-dom'
import universal from 'react-universal-component'
// import { Switch } from 'alva/static'
// import GlobalEmitter from '../helpers/GlobalEmitter'
// import LazyRoute from 'react-lazy-route' // https://github.com/MtDalPizzol/react-lazy-route

import Spinner from '../components/core/routing/Spinner'
import NotFound from '../views/NotFound'
// import '../styles/form.css'

const FirstForm = universal(
  () => import('../components/form/FirstForm/FirstForm'),
  {
    // minDelay: 5e3,
    loading: Spinner,
    error: NotFound
  }
)
const SecondForm = universal(
  () => import('../components/form/SecondForm/SecondForm'),
  {
    // minDelay: 5e3,
    loading: Spinner,
    error: NotFound
  }
)
const RequiredStep = universal(
  () => import('../components/form/RequiredStep/RequiredStep'),
  {
    // minDelay: 5e3,
    loading: Spinner,
    error: NotFound
  }
)
const ContinueCardQuestion = universal(
  () => import('../components/form/Dialogs/ContinueCardQuestion'),
  {
    // minDelay: 5e3,
    loading: Spinner,
    error: NotFound
  }
)

@inject('store')
@observer
class View extends Component {
  // constructor(props) {
  // 	super(props)
  // 	// GlobalEmitter.on(
  // 	// 	'forceFormUpdate',
  // 	// 	(this.emitter_token = () => {
  // 	// 		this.forceUpdate()
  // 	// 	})
  // 	// )
  // }
  // componentWillUnmount() {
  // 	// GlobalEmitter.off('forceFormUpdate', this.emitter_token)
  // }
  render() {
    return (
      <Switch>
        <Route exact path="/form" component={RequiredStep} />
        <Route
          exact
          path="/form/first"
          // restrict={!this.props.store.regForm.hasRequiredData()}
          // onForbidden={RequiredStep}
          component={FirstForm}
        />
        <Route
          exact
          path="/form/second"
          // restrict={!this.props.store.regForm.hasRequiredData()}
          // onForbidden={RequiredStep}
          component={SecondForm}
          // onLoading={Spinner}
          // onLoading={<Spinner color="blue" />}
        />
        <Route path="/form/firststep" component={RequiredStep} />
        <Route path="/form/continue" component={ContinueCardQuestion} />
        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}

// function mapStateToProps ({ auth }) {
//   return {
//     user: enhanceUser(auth.user)
//   }
// }

export default View
