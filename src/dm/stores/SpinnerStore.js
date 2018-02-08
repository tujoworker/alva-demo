/**
 * Spinner Store
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { types } from 'mobx-state-tree'

export default types
  .model('Spinner', {
    props: types.optional(types.frozen, {})
    // props: types.frozen
  })
  .views(self => ({
    get fadeIn() {
      return self.props.fadeIn || false
    },
    get slowFadeNextView() {
      return self.props.slowFadeNextView
    }
  }))
  .actions(self => ({
    setFadeIn(state = true) {
      self.setProps({
        fadeIn: state
      })
      if (self.fadeInT) clearTimeout(self.fadeInT)
      self.fadeInT = setTimeout(() => {
        self.setProps({
          fadeIn: !state
        })
      }, 1e3)
    },
    setSlowFadeNextView() {
      self.setProps({
        slowFadeNextView: true
      })
      setTimeout(() => {
        self.setProps({
          slowFadeNextView: false
        })
      }, 1e3)
    },
    setProps(props) {
      self.props = Object.assign({}, self.props, props)
    }
  }))
