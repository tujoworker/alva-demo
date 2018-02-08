/**
 * Details View Component
 * First, fetch the data and show a loading indicator message
 * Then, show the results :)
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//main classes
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Anime from 'react-anime'

//components
import Stations from '../components/Stations'

@inject('data')
@observer
class Details extends Component {
  render() {
    return (
      <div style={{ marginTop: '7vh' }}>
        {!this.props.data.rail && (
          <div className="indicator text-center">
            <h3 style={{ marginTop: '20vh' }} className="note">
              Loading ...
            </h3>
          </div>
        )}
        {this.props.data.hasNoRail && (
          <div className="indicator text-center">
            <h3 style={{ marginTop: '20vh' }} className="note">
              No Rails Found
            </h3>
          </div>
        )}

        {this.props.data.rail && (
          <Anime
            easing="easeOutSine"
            duration={1e3}
            delay={100}
            opacity={[0, 1]}
          >
            <h1>{this.props.data.rail.title}</h1>
          </Anime>
        )}

        {this.props.data.rail && (
          <div className="row">
            {this.props.data.rail.stations && (
              <Stations
                stationId={parseFloat(this.props.match.params.stationId)}
                title="Stations"
                list={this.props.data.rail.stations}
                animate={false}
              />
            )}

            {this.props.data.rail.others && (
              <Stations
                stationId={parseFloat(this.props.match.params.stationId)}
                title="Other"
                list={this.props.data.rail.others}
                animate={false}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Details
