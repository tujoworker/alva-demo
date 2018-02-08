/**
 * Form Model
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { types } from 'mobx-state-tree'

export default {
  // id: types.identifier(),
  // id: types.optional(types.identifier(types.number), 1), // id is needed once we use .reference()
  // nr: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
  email: types.optional(types.string, ''),
  password: types.optional(types.string, ''),
  passwordConfirm: types.optional(types.string, '') //use maybe for null
}
