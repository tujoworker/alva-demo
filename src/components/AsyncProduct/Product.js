import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'
import { css } from 'react-emotion'

import { scaleInFX } from '../Wrapper'

const style = css`
  h1 {
    color: var(--main-bg-color);
  }
  ${scaleInFX};
`

@inject('store')
@observer
export default class Timer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    store: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <div className={style}>
        <h1>
          <FormattedMessage
            id="test"
            values={{
              id: this.props.id,
              count: this.props.store.count
            }}
          />
        </h1>
      </div>
    )
  }
}
