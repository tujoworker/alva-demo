/**
 * Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import { injectIntl } from 'react-intl'
import React from 'react'

import styled, { css } from 'react-emotion'

import { slideUpKeyframes } from '../fx/ComponentEffects'

// const getDelay = delay =>
//     delay === -1 ? Math.round(Math.random() * 2e3) : delay

// const getFX = ({ delay } = { delay: 0 }) => css`
//     animation: ${fadeIn} 1s ease-out 1;
//     ${'' /* animation-delay: ${getDelay(delay)}ms; */}
// `

// const fx = getFX({ delay: 0 })
const slideDownFX = css`
    transform: translateY(10px);
    animation: ${slideUpKeyframes} 1s ease-out 1;
    animation-fill-mode: forwards
    animation-delay: 1s;
`

const FooterComp = styled('footer')`
  ${'' /* grid-column-start: main-start;
  grid-column-end: main-end;
  grid-row-start: main-end; */} ${slideDownFX};
  /*position: absolute;*/
  /*bottom: 0;*/
  height: 4em;
  /*margin-top: 1.5em;*/

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  font-size: 2.5em; /* We could use rem; here if HTML element has synamic font sizing! */
  background: #f1f1f1;
`

export default () => (
  <FooterComp role="contentinfo">
    <a
      href="https://twitter.com/tujoworker"
      target="_blank"
      rel="noopener noreferrer"
    >
      @tujoworker
    </a>{' '}
    | github:{' '}
    <a
      href="https://github.com/tujoworker"
      target="_blank"
      rel="noopener noreferrer"
    >
      tujoworker
    </a>
    {/* <FormattedMessage
              id="hello"
              // values={{ name: <b>{name}</b>, unreadCount }}
          /> */}
  </FooterComp>
)
