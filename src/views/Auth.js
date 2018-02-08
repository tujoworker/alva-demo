/**
 * A simple async loaded routing demo
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends Component {
  state = {
    // hasError: false,
    redirectToReferrer: false
  }
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  login() {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    // simulate an error
    // throw new Error('I crashed!')
    const { from } = this.props.location.state || {
      from: { pathname: '/' }
    }
    const { redirectToReferrer } = this.state

    return (
      <div>
        {redirectToReferrer === true && <Redirect to={from} />}
        <p>You must log in to view the page</p>
        <button onClick={this.login.bind(this)}>Log in</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: ComponentWrapper, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <ComponentWrapper {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
PrivateRoute.defaultProps = {
  location: null
}
PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func.isRequired
}

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
)

const AuthExample = () => {
  return (
    <Router basename="/auth">
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <ErrorBoundary>
          <Route path="/login" component={Login} />
        </ErrorBoundary>
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}

class ErrorBoundary extends Component {
  state = { hasError: false }

  // docs (or use ptd): https://github.com/facebook/prop-types#usage
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)
    // console.log('Error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default AuthExample
