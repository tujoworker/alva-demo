import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'
import { css } from 'react-emotion'

import { scaleInFX } from '../Wrapper'

@inject('store')
@observer
export class MyComponent extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    store: PropTypes.object.isRequired
  }
  render() {
    return (
      <div
        css={css`
          ${scaleInFX};
          color: 'green';
        `}
      >
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
