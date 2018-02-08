/**
 * Details View Component
 * First, fetch the data and show a loading indicator message
 * Then, show the results :)
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import '../styles/NotFound.css'

//main classes
import { FormattedMessage } from 'react-intl'
// import Anime from 'react-anime'
import React, { Component } from 'react'
// import { inject, observer } from 'mobx-react'

// @inject('locale')
// @observer
export default class Details extends Component {
  render() {
    return (
      <div className="not_found app_content_inner">
        {/* <Anime
					easing="easeOutSine"
					duration={1e3}
					delay={100}
					opacity={[0, 1]}
					>
				</Anime> */}
        <h3>
          <FormattedMessage id="view.not_found" />
        </h3>
      </div>
    )
  }
}
