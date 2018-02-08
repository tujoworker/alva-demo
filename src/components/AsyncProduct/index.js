import PropTypes from 'prop-types'
import React from 'react'

import { asyncComponent } from 'react-async-component'
import { css } from 'react-emotion'

export const Loading = ({ id }) => (
  <div
    css={css`
      color: 'yellow';
    `}
  >
    <h1>Loading this heavy component... {id}</h1>
  </div>
)
// docs (or use ptd): https://github.com/facebook/prop-types#usage
Loading.propTypes = {
  id: PropTypes.number.isRequired
}

export const Failed = () => (
  <div
    css={css`
      color: 'red';
    `}
  >
    <h1>Failed to load the heavy component!</h1>
  </div>
)

export default asyncComponent({
  // name: 'AsyncComponent',
  LoadingComponent: Loading,
  ErrorComponent: Failed,
  resolve: () =>
    new Promise(resolve => {
      // resolve(Loading)
      setInterval(() => {
        import('./Product').then(mod => {
          resolve(mod)
        })
      }, 1e3)
    })
})
