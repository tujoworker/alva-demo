/**
 * Handle all the core locale packages stc.
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import React from 'react' //only used if we use FormattedMessage
// import { addLocaleData, FormattedMessage } from 'react-intl'
import { addLocaleData } from 'react-intl'
import { MobxIntlProvider, LocaleStore } from 'mobx-react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import nbLocaleData from 'react-intl/locale-data/nb'
// import deLocaleData from 'react-intl/locale-data/de'
// import frLocaleData from 'react-intl/locale-data/fr'

import en from '../../i18n/en'
import nb from '../../i18n/nb'
// import de from '../../i18n/de'
// import fr from '../../i18n/fr'

addLocaleData([
  ...enLocaleData,
  ...nbLocaleData
  // ...deLocaleData,
  // ...frLocaleData
])

const localeStore = new LocaleStore('en', { en, nb })

// localeStore.F = (id, args) => <FormattedMessage id={id} values={args} />

// make L as a symbolic link aviable
localeStore.L = localeStore.formatMessage
const L = localeStore.formatMessage

export { MobxIntlProvider, localeStore, L }
