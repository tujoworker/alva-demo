/**
 * Source Code Button
 * This component simply displays a button to navigate to the Source Code
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components

import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import anime from 'animejs'

import { css } from 'react-emotion'
import { FormattedMessage } from 'react-intl'

const Style = css`
  background-color: white;
  /*color: #ccc;*/
  /*color: black;*/

  min-height: calc(100vh - 90px);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  /*background: linear-gradient(180deg, #ccc, #ccc, #ccc, #ccc, #ccc, #eee, #ccc, #ccc);
	background-size: 600% 600%;

	animation: GradientAni 2s ease infinite;

	@keyframes GradientAni {
		0% {
			color: #ccc;
			background-position: 0% 100%;
		}
		20% {
			color: #111;
			background-position: 50% 50%;
		}
		100% {
			color: #ccc;
			background-position: 0% 100%;
		}
	}*/

  span.shimmer {
    /*padding: 0 140px 0 0;*/

    /*color: #111;*/
    /*color: rgba(255, 255, 255, 0.6);*/
    color: transparent;
    font-size: 3em;
    font-weight: bold;

    animation-name: shimmer;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    /*-webkit-text-fill-color: transparent;*/
    -webkit-background-clip: text;
    background-clip: text;

    /*background: -webkit-gradient(
			linear,
			0% 0%,
			100% 0%,
			from(rgb(34, 34, 34)),
			color-stop(0.5, rgb(255, 255, 255)),
			to(rgb(34, 34, 34))
		)
		0px 0px / 125px 100% no-repeat rgb(34, 34, 34);*/
    background: linear-gradient(
      90deg,
      #ccc,
      #ccc,
      #ccc,
      #ccc,
      #ccc,
      #111,
      #ccc,
      #ccc
    );
    background-size: 600% 600%;
    background-repeat: no-repeat;
    background-position: 0% 0%;

    @keyframes shimmer {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
  }

  span {
    color: #ccc;
    font-size: 3em;
    font-weight: bold;

    animation: ColorAni 3s ease infinite;

    @keyframes ColorAni {
      0%,
      10% {
        opacity: 0.02;
        transform: scale(1.02);
      }
      20%,
      80% {
        opacity: 1;
        transform: scale(1.1);
      }
      80%,
      100% {
        opacity: 0;
        transform: scale(1);
      }
    }
  }
`

@inject('store')
@observer
// @injectIntl // not sure wy we have to use this anymore
class SourceCode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  componentDidMount() {
    if (this.props.store.spinner.fadeIn) {
      this.props.store.spinner.setFadeIn(false)
      anime({
        targets: '.app__root .rea-spinner',
        easing: 'easeOutSine',
        opacity: [0, 1],
        // delay: 1e3,
        duration: 800
      })
    }
  }
  // componentWillUnmount() {
  // 	setTimeout(() => {
  // 		this.props.store.spinner.setFadeIn(false)
  // 	}, 2e3)
  // }
  render() {
    return (
      <div css={Style} className="rea-spinner">
        <FormattedMessage id="router.loading_message" />
      </div>
    )
  }
}

export default SourceCode
