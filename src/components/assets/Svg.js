/**
 * Svg demo
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React, { Component } from 'react'
import ReactSVG from 'react-svg'

import { css } from 'react-emotion'

import InlineSvg from './InlineSvg'

// More details: https://github.com/atomic-app/react-svg

export default class Svg extends Component {
  render() {
    return (
      <div>
        <InlineSvg />
        <ReactSVG
          css={css`
            @keyframes fade-in {
              from {
                transform: translateY(-10px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .my_text_class {
              opacity: 0;

              animation: fade-in 4s ease-out 3;
              animation-fill-mode: forwards;
              animation-delay: 100ms;
            }
            .my_text_class tspan {
              color: blue;
              fill: currentColor;
            }
          `}
          path="../../assets/graph.svg"
          // callback={svg => console.log(svg)}
          className="class-name"
          wrapperClassName="wrapper-class-name"
        />
      </div>
    )
  }
}
