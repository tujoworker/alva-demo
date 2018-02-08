// @flow

import React, { Component } from 'react'

interface Person {
  name: string;
  age: number;
  hasKids?: boolean | number;
}
const person: Person = {
  name: 'Tobias',
  age: 21
}
console.log('person', person)
const fn = (x: string | number) => {
  return x
}
console.log('fn', fn('123'))

//Example of Component and flow
type Props = {
  name: string
}
export default class App extends Component<Props> {
  render() {
    return <div>Hello</div>
  }
}
