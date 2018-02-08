/**
 * A simple test, to test the results of components
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//test core packages
import { shallow, fakeProps } from 'alva/tdd'
import React from 'react'

// import fakeProps2 from 'react-fake-props'
// import path from 'path'
import toJson from 'enzyme-to-json'

import Header from './Header'

// The API Docs
// http://airbnb.io/enzyme/docs/api/
// https://facebook.github.io/jest/docs/en/expect.html

const store = fakeProps(require.resolve('./Header'), { optional: true })
// const store = {}
// console.log('store', store)

describe('Component renders correctly', () => {
  const HeaderWrap = shallow(<Header {...store} />)

  it('have to match snapshot', () => {
    expect(toJson(HeaderWrap)).toMatchSnapshot()
  })

  it('has a role attribute', () => {
    expect(HeaderWrap.find('[role="banner"]').exists()).toBe(true)
    expect(HeaderWrap.first().props().role).toBe('banner')
  })

  it('has a menu inside', () => {
    expect(HeaderWrap.closest('nav').exists()).toBe(true)
  })

  // it('has to have at least one li element', () => {
  //     expect(HeaderWrap.find('li.list-group-item')).toHaveLength(1);
  // });
})
