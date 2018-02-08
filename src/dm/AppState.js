/**
 * The Store class for app states
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { observable } from 'mobx'

class AppState {
  @observable headerTitle = 'Rail Stations Typeahead'
}

export default AppState
