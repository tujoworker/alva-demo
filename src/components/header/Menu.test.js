/**
 * A simple test, to test the results of components
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//for older browsers
// import '../../core/startup/polyfill'

//test core packages
import { shallow } from 'alva/tdd'
import React from 'react'

import toJson from 'enzyme-to-json'

import Menu from './Menu'

// The API Docs
// http://airbnb.io/enzyme/docs/api/
// https://facebook.github.io/jest/docs/en/expect.html

// Attention: use .wrappedComponent once we @inject a component
// const store = fakeProps(__dirname, './Menu')
const store = {
  // locale: { L: () => 'x' } // because of @inject('locale')
  locale: { L: jest.fn() } // because of @inject('locale')
}

describe('Component renders correctly', () => {
  const MenuWrap = shallow(<Menu.wrappedComponent {...store} />)

  it('have to match snapshot', () => {
    expect(toJson(MenuWrap)).toMatchSnapshot()
  })

  it('has a href to / and exact attribute', () => {
    expect(MenuWrap.find('[to="/"][exact]').exists()).toBe(true)
  })
})
