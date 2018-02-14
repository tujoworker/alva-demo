/**
 * Global App Style
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { css, injectGlobal } from 'react-emotion'

import media from './MediaTemplates'

import 'normalize.css/normalize.css'
// import NormalizeStyle from './Normalize'

injectGlobal`
    ${'' /* ${NormalizeStyle}; */};
    :root {
        ${'' /* font-size: 100%; */}
        ${
          '' /* font-size: 62.5%; //https://css-tricks.com/rem-global-em-local/#comment-1600580 */
        }
    }
`

export default css`
  margin: 0;
  padding: 0;
  min-height: 100vh;

  touch-action: manipulation;

  ${'' /* Simple CSS Grid: https://codepen.io/tujoworker/pen/dZwxwO */};
  ${'' /* display: grid; */} grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];

  ${'' /* background-color: crimson; */};
  background-color: #f1f1f1;

  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', 'Helvetica', sans-serif;

  font-size: 100%;

  ${'' /* ${media.tablet`
        a {
            color: tomato;
        }
        `}; */} ${media.phone`
        a {
            color: DarkTurquoise;
        }
    `};

  @media (min-width: 100px) {
    font-size: 160%;
  }

  @media (min-width: 400px) {
    font-size: 150%;
  }

  @media (min-width: 600px) {
    font-size: 100%;
  }

  @media (min-width: 900px) {
    font-size: 120%;
  }

  @media screen and (min-width: 1200px) {
    font-size: 140%;
  }

  noscript {
    margin: 2em;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    font-size: 2em;
    color: FireBrick;
  }

  h1 {
    font-size: 3em;
  }
  /*button {
    	color: red;
    }*/

  .not_found {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }

  .routing__bg {
    background: #fff;
  }
`
