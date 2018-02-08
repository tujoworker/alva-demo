/**
 * Cool Inline SVG demo
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React from 'react'
import { css } from 'react-emotion'
export default () => (
  <div
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
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      span {
        opacity: 0;
        display: block;
        padding: 0.2em 0;
        font-size: 0.8em;
        animation: fade-in 1s ease-out 1;
        animation-fill-mode: forwards;
      }
      svg {
        padding: 0 0.4em 0.2em;
        width: 1em;
        height: 1em;
        fill: currentColor;
        vertical-align: middle;
        ${'' /* animation: rotate 1s linear 10; */};
      }
      span:nth-of-type(1) {
        color: blue;
        svg {
          padding-left: 0;
        }
      }
      span:nth-of-type(2) {
        color: green;
        animation-delay: 100ms;
      }
      span:nth-of-type(3) {
        color: orange;
        animation-delay: 200ms;
      }
      span:nth-of-type(4) {
        color: red;
        svg {
          padding-left: 0;
        }
        animation-delay: 300ms;
      }
    `}
  >
    <svg>
      <defs>
        <g id="icon-image">
          <path
            className="path1"
            d="M0 4v26h32v-26h-32zM30 28h-28v-22h28v22zM22 11c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3zM28 26h-24l6-16 8 10 4-3z"
          />
        </g>
        <g id="icon-play">
          <path d="M30.662 5.003c-4.488-0.645-9.448-1.003-14.662-1.003-5.214 0-10.174 0.358-14.662 1.003-0.86 3.366-1.338 7.086-1.338 10.997 0 3.911 0.477 7.63 1.338 10.997 4.489 0.645 9.448 1.003 14.662 1.003 5.214 0 10.174-0.358 14.662-1.003 0.86-3.366 1.338-7.086 1.338-10.997 0-3.911-0.477-7.63-1.338-10.997zM12 22v-12l10 6-10 6z" />
        </g>
        <g id="icon-cart">
          <path d="M30.549 6.077c-1.062-0.303-2.169 0.312-2.473 1.374l-0.157 0.549h-18.654l-0.281-2.248c-0.125-1.001-0.976-1.752-1.985-1.752h-5c-1.105 0-2 0.895-2 2s0.895 2 2 2h3.234l1.781 14.248c0.125 1.001 0.976 1.752 1.985 1.752h17c0.893 0 1.678-0.592 1.923-1.451l4-14c0.303-1.062-0.312-2.169-1.374-2.473zM16 16v-2h4v2h-4zM20 18v2h-4v-2h4zM16 12v-2h4v2h-4zM9.516 10h4.484v2h-4.234l-0.25-2zM10.016 14h3.984v2h-3.734l-0.25-2zM10.516 18h3.484v2h-3.234l-0.25-2zM24.491 20h-2.491v-2h3.063l-0.571 2zM25.634 16h-3.634v-2h4.206l-0.571 2zM26.777 12h-4.777v-2h5.349l-0.571 2zM8 29c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3zM20 29c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3z" />
        </g>
        <g id="icon-phone">
          <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
        </g>
      </defs>
    </svg>
    <span>
      <svg viewBox="0 0 32 32">
        <use xlinkHref="#icon-phone" />
      </svg>
      Call me
    </span>
    <span>
      Add to
      <svg viewBox="0 0 32 32">
        <use xlinkHref="#icon-cart" />
      </svg>
      Cart
    </span>
    <span>
      Photo Gallery
      <svg viewBox="0 0 32 32">
        <use xlinkHref="#icon-image" />
      </svg>
    </span>
    <span>
      <svg viewBox="0 0 32 32">
        <use xlinkHref="#icon-play" />
      </svg>
      Play
    </span>
  </div>
)
