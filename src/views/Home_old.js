/**
 * The Home of this app
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React, { Component } from 'react'
// import { getRouteProps } from 'alva/static'

import logoImg from '../logo.png'

import styled, { css } from 'react-emotion'

const Container = styled('div')`
  background: #ccc;
`
const titleStyle = css`
  color: FireBrick;
  text-align: center;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 className={titleStyle}>Welcome to</h1>
          <img src={logoImg} alt="" />
        </Container>
      </div>
    )
  }
}

// export default getRouteProps(() => (
//     <div>
//         <Container>
//             <h1 className={myStyle}>Welcome to</h1>
//             22
//             <img src={logoImg} alt="" />
//         </Container>
//     </div>
// ))

// export default getRouteProps()
