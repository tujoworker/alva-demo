import { css, injectGlobal } from 'react-emotion'
import { inject, observer } from 'mobx-react'
// import { Head } from 'alva/static'
import React, { Component } from 'react'

import Container, { slideDownFX } from '../components/Wrapper'

import AsyncProduct, { Loading, Failed } from './AsyncProduct'

//more info about emotion https://github.com/emotion-js/emotion/tree/master/docs

@inject('store')
export default class MyComponent extends Component {
  componentDidMount() {
    this.iv = setInterval(() => {
      this.props.store.increase()
    }, 1e3)
    import('./AsyncProduct/ProductSecond')
      .then(({ MyComponent }) => {
        return new Promise((resolve, reject) => {
          this.productSecondPromise = reject
          this.secondTimer = setTimeout(() => {
            resolve(this.setState({ MyComponent }))
          }, 2e3)
        })
      })
      .catch(() => {
        clearTimeout(this.secondTimer)
        // this.setState({ MyComponent: Failed })
      })
    // console.log('x', x)
  }
  componentWillUnmount() {
    this.productSecondPromise()
    clearInterval(this.iv)
  }
  state = { MyComponent: null }
  render() {
    const { MyComponent } = this.state
    return (
      <Container>
        {/* <Head>
                    <title>Test 3</title>
                </Head> */}
        <AsyncProduct id={1337} />
        {MyComponent ? <MyComponent id={1337} /> : <Loading />}
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
                            color: blue;
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
      </Container>
    )
  }
}

@inject('store')
@observer
class Timer extends Component {
  render() {
    return <span css={slideDownFX}>Count: {this.props.store.count}</span>
  }
}

const titleStyle = css`
  ${'' /* @import './views/About.css'; */} color: FireBrick;
  text-align: center;
`

// :root{} is same as body{}
injectGlobal`
  :root {
    --main-bg-color: blue;
    --font-size: 1em;
    --main-color: #fff;
    ${'' /* --main-color-second: red; */}
  }
`
