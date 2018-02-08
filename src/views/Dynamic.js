// import aboutStyle from './about.css'
import React, { Component } from 'react'

import { css } from 'react-emotion'

import Container from '../components/Wrapper'

// const bounceHeight = 30

// This returns a animation
// const bounce = keyframes`
// from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
// }
//
// 40%, 43% {
//     transform: translate3d(0, -${bounceHeight}px, 0);
// }
//
// 70% {
//     transform: translate3d(0, -${bounceHeight / 2}px, 0);
// }
//
// 90% {
//     transform: translate3d(0, -${bounceHeight / 4}px, 0);
// }
// `

const titleStyle = css`
  color: DarkOrchid;
  text-align: center;
`

export default class MyComponent extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.iv = setInterval(() => {
      let { count } = this.state
      count += 1
      this.setState({
        count
      })
    }, 1e3)
    // anime({
    //     targets: '.about',
    //     easing: 'easeOutSine',
    //     opacity: [0, 1],
    //     // delay: 1e3,
    //     duration: 800
    // })
  }
  componentWillUnmount() {
    clearInterval(this.iv)
  }
  render() {
    return (
      <Container>
        <div className="about">
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

            <h1 className={titleStyle}>This is what we're all about.</h1>
            <h2>Count: {this.state.count}</h2>
            <p>
              React, static sites, performance, speed. It's the stuff that
              makes us tick.
            </p>
            {/* </Anime> */}
          </div>
        </div>
      </Container>
    )
  }
}
