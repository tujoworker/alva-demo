/**
 * A simple Ant Design
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

class Antd extends Component {
  render() {
    return (
      <div>
        <DatePicker />
      </div>
    )
  }
}

export default Antd
