import React, { Fragment } from 'react'
import { getRouteProps, Switch, Route, Link } from 'alva/static'
//
import Post from './Post'

export default getRouteProps(({ match, posts }) => (
  <div>
    <Switch>
      <Route
        path={match.url}
        exact
        render={() => (
          <div>
            <h1>It's blog time.</h1>
            <br />
            All Posts:
            <ul>
              {posts.map(post => (
                <Fragment key={post.id}>
                  <li>
                    <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        )}
      />
      <Route path={`${match.url}/post/:postID`} component={Post} />
    </Switch>
  </div>
))
