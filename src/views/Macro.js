/* eslint react/style-prop-object: 0 */
/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import React, { Component } from 'react'
import React from 'react'
import styled from 'react-emotion'
import macro from 'macro-components'
// import PropTypes from 'prop-types'

// Define some styled-components
const Box = styled.div`
  margin: 1em;
  font-size: 1em;
  color: #555;
`
// Box.displayName = 'Box'

const Heading = styled.h2`
  margin: 1em;
  font-size: 1em;
  color: #555;
`
// Heading.displayName = 'Heading'

const Text = styled.div`
  margin: 1em;
  font-size: 1em;
  color: #555;
`
// Text.displayName = 'Text'

const Flex = styled.div`
  margin: 1em;
  font-size: 1em;
  color: #555;
`

// @macro
// class MediaObject extends Component {
//   static propTypes = {
//     Image: PropTypes.node.isRequired,
//     Heading: PropTypes.node.isRequired,
//     Text: PropTypes.node.isRequired
//   }
//   render() {
//     const { Image, Heading, Text } = this.props
//     return (
//       <Flex p={2} align="center">
//         <Box width={128}>{Image}</Box>
//         <Box>
//           {Heading}
//           {Text}
//         </Box>
//       </Flex>
//     )
//   }
// }

const MediaObject = macro(({ Image, Heading, Text }) => (
  <Flex p={2} align="center">
    <Box width={128}>{Image}</Box>
    <Box>
      {Heading}
      {Text}
    </Box>
  </Flex>
))

// Use the macro-component by passing the components as children
const App = props => (
  <div>
    <MediaObject>
      <Image src="https://vignette.wikia.nocookie.net/vsbattles/images/7/77/The_Apology_Kitten.jpg/revision/latest?cb=20151215164332" />
      <Heading>Hello</Heading>
      <Text>
        This component keeps its tree structure but still allows for
        regular composition.
      </Text>
    </MediaObject>
  </div>
)

export default App
