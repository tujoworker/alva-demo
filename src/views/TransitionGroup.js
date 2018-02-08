// import aboutStyle from './about.css'
import { TransitionGroup, Transition } from 'transition-group'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { css } from 'react-emotion'

import Container from '../components/Wrapper'

const titleStyle = css`
  color: DarkOrchid;
  text-align: center;
`
const style = css`
  min-height: 5em;
  padding: 5em 0 5em;

  .view {
    position: absolute;
  }

  .fade-enter {
    animation: 1s ease 0s normal forwards 1 fadein;
  }

  .fade-leave {
    animation: 1s ease 0s normal forwards 1 fadeout;
  }

  ${'' /* .fade-enter-active {
    color: green;
  }
  .fade-leave-active {
    color: red;
  } */} @keyframes fadein {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default class MyComponent extends Component {
  state = {
    page: 'Home'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        page: 'List'
      })
      setTimeout(() => {
        this.setState({
          page: 'Video'
        })
      }, 3e3)
    }, 3e3)
  }
  componentWillUnmount() {
    clearInterval(this.iv)
  }
  render() {
    return (
      <Container>
        <div css={style}>
          <Switcher css={titleStyle} page={this.state.page} />
        </div>
      </Container>
    )
  }
}

const onLeave = () => console.log('left')
const onEmpty = () => console.log('group empty')

const Switcher = ({ page }) => (
  <TransitionGroup
    component="div"
    className="whatever"
    // duration={1e2}
    // delay={100}
    prefix="fade"
    onEmpty={onEmpty}
  >
    <Transition
      key={page}
      duration={1e3}
      enterDelay={0}
      leaveDelay={0}
      onLeave={onLeave}
    >
      {getComponent(page)}
    </Transition>

    {/* <div>
      {page === 'Home' && (
        <Transition key={`${page}-link`}>HOME</Transition>
      )}
      {page === 'List' && (
        <Transition key={`${page}-link`}>LIST</Transition>
      )}
      {page === 'Video' && (
        <Transition key={`${page}-link`}>VIDEO</Transition>
      )}
    </div> */}
  </TransitionGroup>
)
// docs (or use ptd): https://github.com/facebook/prop-types#usage
Switcher.propTypes = {
  page: PropTypes.string.isRequired
}

const getComponent = page => {
  console.log('page:', page)
  switch (page) {
    case 'Home':
      return <Home />
    case 'List':
    default:
      return <List />
    case 'Video':
      return <Video />
  }
}

const Home = () => <div className="view">HOME</div>
const List = () => <div className="view">LIST</div>
const Video = () => <div className="view">VIDEO</div>
