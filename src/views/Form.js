/**
 * Form View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
//in case we use this.props.history.push to navigate to a new location
import { Switch } from 'react-router-dom'
// import { Switch } from 'alva/static'
// import GlobalEmitter from '../helpers/GlobalEmitter'
import LazyRoute from 'react-lazy-route' // https://github.com/MtDalPizzol/react-lazy-route

import Spinner from '../components/core/routing/Spinner'
import NotFound from '../views/NotFound'
// import '../styles/form.css'

const FirstForm = () => import('../components/form/FirstForm/FirstForm')
const SecondForm = () => import('../components/form/SecondForm/SecondForm')
const RequiredStep = () =>
  import('../components/form/RequiredStep/RequiredStep')
const ContinueCardQuestion = () =>
  import('../components/form/Dialogs/ContinueCardQuestion')

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
        <LazyRoute
          exact
          path="/form"
          render={RequiredStep}
          onLoading={Spinner}
        />
        <LazyRoute
          exact
          path="/form/first"
          // restrict={!this.props.store.regForm.hasRequiredData()}
          // onForbidden={RequiredStep}
          render={FirstForm}
          onLoading={Spinner}
        />
        <LazyRoute
          exact
          path="/form/second"
          // restrict={!this.props.store.regForm.hasRequiredData()}
          // onForbidden={RequiredStep}
          render={SecondForm}
          // onLoading={Spinner}
          onLoading={<Spinner color="blue" />}
        />
        <LazyRoute
          path="/form/firststep"
          render={RequiredStep}
          onLoading={Spinner}
        />
        <LazyRoute
          path="/form/continue"
          render={ContinueCardQuestion}
          onLoading={Spinner}
        />
        <LazyRoute path="*" component={NotFound} />
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
