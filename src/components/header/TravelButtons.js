/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React, { Component } from 'react'
import { inject } from 'mobx-react'
import timeTravel from '../../dm/stores/TimeTravel'

@inject('store')
export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.TimeTravel = new timeTravel({
      store: this.props.store.regForm.props
    })
  }
  prev() {
    this.TimeTravel.previousState()
  }
  next() {
    this.TimeTravel.nextState()
  }
  render() {
    return (
      <div>
        <button onClick={this.prev.bind(this)} title="previous state">
          &lt;
        </button>
        <button onClick={this.next.bind(this)} title="next state">
          &gt;
        </button>
      </div>
    )
  }
}
