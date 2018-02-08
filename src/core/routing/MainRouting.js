/**
 * The main routing config
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { Route, Switch } from 'alva/static'
import React, { Component } from 'react'

import styled from 'react-emotion'
import universal from 'react-universal-component'

import Blog from '../../views/Blog'
import Contentful from '../../views/Contentful'
import Dynamic from '../../views/Dynamic'
import Firebase from '../../views/Firebase'
import Form from '../../views/Form'
import Macro from '../../views/Macro'
import ContainerQuery from '../../views/ContainerQuery'
import Home from '../../views/Home'
import Markdown from '../../views/Markdown'
import ElementQuery from '../../views/ElementQuery'
import Antd from '../../views/Antd'
import NotFound from '../../views/404'
import Spinner from '../../components/core/routing/Spinner'
import TransitionGroup from '../../views/TransitionGroup'

const About = universal(props => import('../../views/About'), {
  // minDelay: 5e3,
  loading: Spinner,
  error: NotFound
})
const Auth = universal(props => import('../../views/Auth'), {
  // minDelay: 5e3,
  loading: Spinner,
  error: NotFound
})
// const Graphiql = universal(props => import('../../views/Graphiql'), {
// 	// minDelay: 5e3,
// 	loading: Spinner,
// 	error: NotFound
// })

// React Lazy Load Router
// import LazyRoute from 'react-lazy-route' // https://github.com/MtDalPizzol/react-lazy-route
// const About = () => import('../../views/About')

// React Async Component
// import { asyncComponent } from 'react-async-component' // https://github.com/ctrlplusb/react-async-component
// const About = asyncComponent({
//     resolve: () => import('../../views/About')
// })

const MainComp = styled('main')`
  ${'' /* grid-column-start: main-start;
  grid-row-start: content-start;
  grid-row-end: main-end; */} ${'' /* grid-row-start: main-start;
  grid-row-end: main-end; */};
`

export default class extends Component {
  // componentWillMount() {
  // React Universal can preload components
  // setTimeout(() => {
  // 	About.preload()
  // }, 3e3)
  // }
  render() {
    return (
      <MainComp
        id="main_content"
        role="main"
        className="app_content routing_bg"
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <LazyRoute path="/about" render={About} /> */}
          <Route path="/contentful" component={Contentful} />
          <Route path="/firebase" component={Firebase} />
          <Route path="/markdown" component={Markdown} />
          <Route path="/element-query" component={ElementQuery} />
          {/* <Route path="/graphiql" component={Graphiql} /> */}
          <Route path="/form" component={Form} />
          <Route path="/macro" component={Macro} />
          <Route path="/container-query" component={ContainerQuery} />
          <Route path="/auth" component={Auth} />
          <Route path="/antd" component={Antd} />
          <Route path="/spinner" component={Spinner} />
          <Route path="/dynamic" component={Dynamic} />
          <Route path="/transition" component={TransitionGroup} />
          <Route path="/blog" component={Blog} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainComp>
    )
  }
}
