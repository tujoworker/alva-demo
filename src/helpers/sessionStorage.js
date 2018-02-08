/**
 * Store.js plugin
 * To store data in the session
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import store from 'store'

// console.log('store', store);
// const util = store.util;
// const Global = util.Global;
const Global = typeof window !== 'undefined' ? window : global
const name = 'sessionStorage'

const sessionStorage = () => {
  return Global.sessionStorage
}

const read = key => {
  return sessionStorage().getItem(key)
}

const write = (key, data) => {
  return sessionStorage().setItem(key, data)
}

const each = fn => {
  sessionStorage().forEach((key, i) => {
    fn(read(key), key)
  })
  // for (let i = sessionStorage().length - 1; i >= 0; i--) {
  //     let key = sessionStorage().key(i);
  //     fn(read(key), key);
  // }
}

const remove = key => {
  return sessionStorage().removeItem(key)
}

const clearAll = () => {
  return sessionStorage().clear()
}

let plugins = []
export default store.createStore(
  { name, read, write, each, remove, clearAll },
  plugins
)
