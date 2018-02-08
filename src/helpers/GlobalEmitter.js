/**
 * Globaly accessable evnet emitter
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

// import EventEmitter from 'events';//node core
import EventEmitter from 'event-emitter' // https://github.com/medikoo/event-emitter
export default new EventEmitter()
