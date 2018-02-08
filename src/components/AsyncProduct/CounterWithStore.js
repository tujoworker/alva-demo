import { Provider } from 'mobx-react'
import React, { Component } from 'react'

import Counter from '../Counter'
import SecondStore from '../../dm/stores/SecondStore'

export default class CounterWithStore extends Component {
  render() {
    return (
      <Provider secondStore={SecondStore}>
        <Counter />
      </Provider>
    )
  }
}
