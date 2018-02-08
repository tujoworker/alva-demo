/**
 * TimeTravel Store
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { applySnapshot, onSnapshot } from 'mobx-state-tree'

export default class {
  constructor({ store }) {
    this._bypass = false
    this.states = []
    this.currentFrame = -1
    this.store = store
    onSnapshot(this.store, snapshot => {
      // make sure we are on the last frame to allow a new push
      // if (!this._bypass && this.currentFrame === this.states.length - 1) {
      if (!this._bypass) {
        this.currentFrame++
        this.states.push(snapshot)
      }
    })
  }
  previousState() {
    if (this.currentFrame === 0) return
    this.bypass()
    this.currentFrame--
    applySnapshot(this.store, this.states[this.currentFrame])
  }
  nextState() {
    if (this.currentFrame === this.states.length - 1) return
    this.bypass()
    this.currentFrame++
    applySnapshot(this.store, this.states[this.currentFrame])
  }
  bypass() {
    this._bypass = true
    setTimeout(() => {
      this._bypass = false
    }, 10)
  }
}
