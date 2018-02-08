/**
 * Wrapper Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import PropTypes from 'prop-types'
import React from 'react'

import { css } from 'react-emotion'

import {
  slideDownKeyframes,
  scaleInKeyframes
} from './fx/ComponentEffects'

// const getDelay = delay =>
//     delay === -1 ? Math.round(Math.random() * 2e3) : delay

// const getFX = ({ delay } = { delay: 0 }) => css`
//     animation: ${fadeIn} 1s ease-out 1;
//     ${'' /* animation-delay: ${getDelay(delay)}ms; */}
// `

// const fx = getFX({ delay: 0 })
const slideDownFX = css`
  animation: ${slideDownKeyframes} 1s ease-out 1;
  ${'' /* animation-delay: ${getDelay(delay)}ms; */};
`
const scaleInFX = css`
  animation: ${scaleInKeyframes} 1s ease-out 1;
  ${
    '' /* Use fill-mode to get the last animation state after the animation is complete */
  } ${'' /* opacity: 0.6;
    animation-fill-mode: forwards;  */} ${
  '' /* animation-delay: ${getDelay(delay)}ms; */
};
`

const AppContent = css`
  overflow: hidden;
  font-size: 1.5em; /* We could use em;/* We could use rem; here if HTML element has synamic font sizing! */
  min-height: calc(100vh - 10em);
  background: #fff;
`
const AppContentInner = css`
  min-height: calc(100vh - 10em);
  padding: 10px;
  background: #fff;
  ${slideDownFX};
  ${'' /* -webkit-animation-delay: 2s; */} ${'' /* animation: ${fadeIn} 1s ease-out 1; */};
`
// const Link = Div.withComponent('a')

export const InnerContainer = props => (
  <div css={AppContentInner} className="app_content_inner">
    {props.children}
  </div>
)
InnerContainer.propTypes = {
  children: PropTypes.node.isRequired
}
export const Container = props => (
  <div css={AppContent} className="app_content">
    <div css={AppContentInner}>{props.children}</div>
  </div>
)
Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container

export { slideDownFX, scaleInFX }
