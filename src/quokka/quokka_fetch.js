// import fetch from 'node-fetch'
import fetch from 'isomorphic-fetch'

// async / await
const getUsers = async args => {
  const result = await fetch(`http://echo.jsontest.com/key/value/${args}`)
  return await result.json()
}
const asyncResult = getUsers('one/two')
asyncResult

// generator / yield
// const generator = function*(args) {
//   const promise = fetch(`http://echo.jsontest.com/key/value/${args}`)
//   yield promise.then(r => r.json())
// }
// const generatorResult = generator('one/two').next().value
// generatorResult

// generator / yield
const generator = function*() {
  const args = yield
  // args
  const promise = fetch(`http://echo.jsontest.com/key/value/${args}`)
  return promise.then(r => r.json())
}
const gen = generator()
gen.next() // we start the generator
const generatorResult = gen.next('one/two').value
generatorResult

// promise
const promise = args => {
  return fetch(`http://echo.jsontest.com/key/value/${args}`).then(r =>
    r.json()
  )
}
const promiseResult = promise('one/two')
promiseResult
