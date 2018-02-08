/**
 * The main routing config
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { createBrowserHistory } from 'history'

export default (typeof document !== 'undefined'
  ? createBrowserHistory({
      /* pass a configuration object here if needed */
    })
  : null)
