/* eslint react/prop-types: 0 */

// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import firebaseDB from './src/dm/Firebase'
import contentfulClient from './src/dm/Contentful'

import { extractCritical } from 'emotion-server'

// import customWebpackConfig from './config/webpack.config'
// import withCSSModules from './config/webpack.config'
// import jsLoader from 'react-static/lib/webpack/rules/jsLoader'
// import cssLoader from 'react-static/lib/webpack/rules/cssLoader'
// import withCss from 'react-static/lib/plugins/withCssLoader'
// import withFiles from 'react-static/lib/plugins/withFileLoader'

export default {
  getSiteProps: () => ({
    title: 'Alva Project',
    metaDescription:
      'Framework for dynamic-rendered or statically-exported {🚀} React apps'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const { fields: { body } } = await contentfulClient.getEntry(
      '1asN98Ph3mUiCYIYiiqwko'
    )

    const snapshot = await firebaseDB.ref('title').once('value')
    const title = snapshot.val()

    return [
      {
        path: '/'
      },
      {
        path: '/about'
      },
      {
        path: '/contentful',
        getProps: () => ({
          body
        })
      },
      {
        path: '/firebase',
        getProps: () => ({
          title
        })
      },
      {
        path: '/markdown'
      },
      {
        path: '/blog',
        getProps: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          getProps: () => ({
            post
          })
        }))
      },
      // {
      //     path: '/about'
      // },
      {
        // path: '/dynamic',
        // If using automatic routing, you can specify a component to render the
        // 404 page by creating a route with `is404` set to `true` and defining a
        // `component` to use.
        is404: true,
        component: './src/components/Pending'
      }
    ]
  },
  // siteRoot: 'http://localhost:5001', // Optional, but necessary for the sitemap.xml

  // // The entry location for your app, defaulting to `./src/index.js`
  // // This file must export the JSX of your app as the default export,
  // // eg. `default export <MyApp />`.
  // // It also handles the rendering of your app while in development mode
  // // (including hot reloading). For a brief example, see the Project
  // // Setup section above.
  // entry: './src/index.js',

  // // An optional custom React component that renders the base
  // // Document for every page, including the dev server. If used, it must utilize the
  // // `Html`, `Head`, `Body` and `children` for react-static to work. The optional
  // // `siteProps` prop will contain any data returned by `getSiteProps` in your config
  // // and `renderMeta` prop refers to any data you potentially assigned to it during
  // // the custom `renderToHtml` hook.
  // Document: ({ Html, Head, Body, children, siteProps, renderMeta }) => (
  //     <Html lang="en-US">
  //         <Head>
  //             <meta charSet="UTF-8" />
  //             <meta
  //                 name="viewport"
  //                 content="width=device-width, initial-scale=1"
  //             />
  //         </Head>
  //         <Body>{children}</Body>
  //     </Html>
  // ),
  renderToHtml: (render, App, meta) => {
    const { html, css } = extractCritical(render(<App />))
    meta.styleTags = <style dangerouslySetInnerHTML={{ __html: css }} />
    return html
  },
  /**
   * Works only if there is no /public/index.html file
   */
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html,
        Head,
        Body,
        children,
        siteProps,
        renderMeta
      } = this.props

      return (
        <Html lang="en">
          <Head>
            <meta charSet="UTF-8" />
            <title>{siteProps.title}</title>
            <meta name="description" content={siteProps.metaDescription} />
            <meta
              name="viewport"
              content="width=device-width, user-scalable=0, initial-scale=1"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
  // webpack: [withCss, withFiles],
  // webpack: [
  // // Custom, on-the-fly webpack customization
  // (config, { stage }) => {
  //     if (stage === 'prod') {
  //         //   config.module.rules.push()
  //     }
  //     return config
  // },
  // customWebpackConfig
  // jsLoader,
  // withCSSModules
  // withFiles
  // ],
  paths: {
    // src: 'src', // The source directory. Must include an index.js entry file.
    // serve: 'local', // The directory local server runs from
    dist: 'build' // The output directory.
    // devDist: 'dist', // The output directory on running develpment evniroment.
    // public: 'public' // The public directory (files copied to dist during build)
  },
  webpack: config => {
    const renderer = new marked.Renderer()

    config.module.rules[0].oneOf.unshift({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
            renderer
          }
        }
      ]
    })

    return config
  },
  // Optional. Set to true to serve the bundle analyzer on a production build.
  bundleAnalyzer: false
}
