/**
 * Handle all the core locale packages stc.
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { addLocaleData } from 'react-intl'
import { MobxIntlProvider, LocaleStore } from 'mobx-react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import nbLocaleData from 'react-intl/locale-data/nb'

import en from '../../i18n/en'
import nb from '../../i18n/nb'

addLocaleData([...enLocaleData, ...nbLocaleData])

const localeStore = new LocaleStore('en', { en, nb })

localeStore.L = localeStore.formatMessage
const L = localeStore.formatMessage

export { MobxIntlProvider, localeStore, L }
