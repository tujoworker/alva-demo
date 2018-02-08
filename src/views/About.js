import { injectGlobal } from 'react-emotion'
import React, { Component } from 'react'

import AsyncProduct from '../components/AsyncProduct'
import Container from '../components/Wrapper'

import universal from 'react-universal-component' // https://github.com/faceyspacey/react-universal-component

const CounterWithStore = universal(
  props => import('../components/AsyncProduct/CounterWithStore'),
  {
    // minDelay: 5e3,
    // loading: Spinner,
    // error: NotFound
  }
)

// @inject('store')
export default class MyComponent extends Component {
  render() {
    return (
      <Container>
        <noscript>
          You need to enable JavaScript to run this app / website.
        </noscript>
        {/* <Head>
                    <title>Test 3</title>
                </Head> */}

        <AsyncProduct id={1337} />
        <CounterWithStore />
      </Container>
    )
  }
}

injectGlobal`
  :root {
    --main-bg-color: blue;
    --font-size: 1em;
    --main-color: #fff;
  }
`
