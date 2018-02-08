/**
 * Storybook index
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import React from 'react'

import { Button, Welcome } from '@storybook/react/demo'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'

// import { setupGraphiQL } from '@storybook/addon-graphql'

import '../src/core/startup/required'
import Root from './Root'
import Provider from './Providers'

import Header from '../src/components/header/Header'
import Menu from '../src/components/header/Menu'
import RequiredStep from '../src/components/form/RequiredStep/RequiredStep'
import FirstForm from '../src/components/form/FirstForm/FirstForm'
import SecondForm from '../src/components/form/SecondForm/SecondForm'

// const log = action([args => args])
const log = action(args => args)
const goTo = linkTo(name => name, (name, id) => id)

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

// const Decorator = story => <Provider>{story()}</Provider>

storiesOf('Header', module)
  .add('With Header', () => (
    // <Button onClick={action('clicked')}>Hello Button</Button>
    <Root>
      <Provider>
        {/* <Menu /> */}
        <Header />
      </Provider>
    </Root>
  ))
  .add('With Menu', () => (
    // <Button onClick={action('clicked')}>Hello Button</Button>
    <Root>
      <Provider>
        <Menu />
      </Provider>
    </Root>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="Some emojis">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Form', module)
  .add('Required', () => (
    <Root>
      <Provider>
        <RequiredStep
          onSubmit={() => {
            log('Go To First')
            goTo('Form', 'First')
          }}
        />
      </Provider>
    </Root>
  ))
  .add('First', () => {
    return (
      <Root>
        <Provider>
          <FirstForm
            onSubmit={() => {
              log('Go To Second')
              goTo('Form', 'Second')
            }}
          />
        </Provider>
      </Root>
    )
  })
  .add('Second', () => (
    <Root>
      <Provider>
        <SecondForm />
      </Provider>
    </Root>
  ))

//is not working well yet
// // setup the graphiql helper which can be used with the add method later
// const graphiql = setupGraphiQL({
// 	url: 'http://localhost:3001/graphql',
// 	variables: { hash: '93279e3308bdbbeed946fc965017f67a' }
// })
//
// storiesOf('GraphQL Demo', module).add(
// 	'get user info',
// 	graphiql(
// 		`{
// 			query {
// 				getTmpReg(hash: '93279e3308bdbbeed946fc965017f67a') {
// 					fields {
// 						name
// 					}
// 					navigation {
// 						location
// 					}
// 				}
// 			}
// 		}`
// 	)
// )
