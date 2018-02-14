/**
 * A simple test, to test the results of components
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//test core packages
// import { shallow, mount, fakeProps } from 'alva'
// import { getRouteProps } from 'alva/static'
import { shallow, mount, fakeProps } from 'alva/tdd'
import React from 'react'

import toJson from 'enzyme-to-json'

import RequiredStep from './RequiredStep'
import ProviderProps from '../../../core/test/ProviderProps'

// The API Docs
// http://airbnb.io/enzyme/docs/api/
// https://facebook.github.io/jest/docs/en/expect.html

// some handy utilities
// learn more about this `sel` function
// from my other blog post: http://kcd.im/sel-util
// const sel = id => `[data-test="${id}"]`
// const hasMenu = wrapper => wrapper.find(sel('menu')).length === 1
//

describe('Component renders correctly', () => {
  // only locale={localeStore} is needed from the Provider
  const HeaderWrap = mount(
    <ProviderProps.Provider lang="en">
      <RequiredStep.wrappedComponent {...ProviderProps} />
    </ProviderProps.Provider>
  )

  // console.log('toJson(HeaderWrap)', toJson(HeaderWrap).find('form'))

  // Once we have the Provider in the three, the toJson gets way to large!
  it('have to match snapshot', () => {
    expect(toJson(HeaderWrap.find('Container'))).toMatchSnapshot()
  })

  it('has a form tag', () => {
    expect(HeaderWrap.find('form').exists()).toBe(true)
    // expect(HeaderW rap.first().props().role).toBe('banner')
  })
  it('has a fieldset tag', () => {
    expect(HeaderWrap.find('fieldset').exists()).toBe(true)
  })
  it('has a submit button', () => {
    expect(HeaderWrap.find('button[type="submit"]').exists()).toBe(true)
  })
  it('has ... after sumit with empty fields', () => {
    HeaderWrap.find('button[type="submit"]').simulate('click')
    expect(HeaderWrap.find('span.err_msg').exists()).toBe(true)
  })
  it('has a FormattedMessage with the content of "Next"', () => {
    expect(HeaderWrap.find('FormattedMessage').text()).toMatch(/Next/)
  })

  // it('has a menu inside', () => {
  //   expect(HeaderWrap.closest('nav').exists()).toBe(true)
  // })

  // it('has to have at least one li element', () => {
  //     expect(HeaderWrap.find('li.list-group-item')).toHaveLength(1);
  // });
})
