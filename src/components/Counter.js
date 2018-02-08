import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { css } from 'react-emotion'

import { slideDownFX } from '../components/Wrapper'

@inject('secondStore')
@observer
export default class Couter extends Component {
  static propTypes = {
    secondStore: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.iv = setInterval(() => {
      this.props.secondStore.increase()
    }, 1e3)
  }
  componentWillUnmount() {
    clearInterval(this.iv)
  }
  render() {
    return (
      <div
      // className={aboutStyle.about}
      // styleName="aboutStyle.about"
      >
        {/* <Anime
                    easing="easeOutElastic"
                    duration={1e3}
                    scale={[0.9, 1]}
                    opacity={[0, 1]}
                    // delay={1e3}
                    // autoplay={true}
                    // ref={ref => {
                    //     // console.log('ref', ref);
                    //     this._animeRef = ref
                    // }}
                    begin={e => {
                    console.log('begin', e);
                }}
                // update={e => {
                //     console.log('update', e);
                // }}
                // complete={e => {
                //     console.log('complete', e);
                // }}
                > */}

        <h1
          className={titleStyle}
          css={`
                        // ${slideDownFX}
                        color: blue;/* gets overwritten by the className Style*/
                        font-size: 2em;

                        &:hover {
                            cursor: pointer;
                            color: green;
                        }

                        & .some-class {
                            font-size: 20px;
                        }
                        `}
        >
          This is what we're all about.
        </h1>
        <h2>
          <Timer state />
        </h2>
        <p css={slideDownFX}>
          React, static sites, performance, speed. It's the stuff that
          makes us tick.
        </p>
        {/* </Anime> */}
      </div>
    )
  }
}

@inject('secondStore')
@observer
class Timer extends Component {
  static propTypes = {
    secondStore: PropTypes.object.isRequired
  }
  render() {
    return (
      <span css={slideDownFX}>Count: {this.props.secondStore.count}</span>
    )
  }
}

const titleStyle = css`
  ${'' /* @import './views/About.css'; */};
  color: tomato;
  text-align: center;
`
