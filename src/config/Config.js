/**
 * Config class
 *
 * @author Tobias Høegh <tobias@tujo.no>
 * @copyright 2017 tujo ANS
 */

import development from './development'
import production from './production'

let cfg = development

if (process.env.NODE_ENV === 'production') {
  Object.assign(cfg, production)
}

export default cfg
