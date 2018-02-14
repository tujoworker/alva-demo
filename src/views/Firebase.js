/**
 * Home View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { getRouteProps } from 'alva/static'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import firebase from '../dm/Firebase'

import { Container } from '../components/Wrapper'

@getRouteProps
export default class Firebase extends Component {
  state = {
    title: typeof document === 'undefined' ? this.props.title : ''
  }
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  componentDidMount() {
    firebase.ref('title').on('value', snapshot => {
      console.log('snapshot', snapshot)
      this.setState({ title: snapshot.val() })
    })
  }
  handleChange(e) {
    firebase.ref('title').set(e.target.value)
  }
  render() {
    return (
      <Container>
        <input
          type="input"
          // defaultValue={this.props.title}
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />
      </Container>
    )
  }
}

// import { getRouteProps } from 'alva/static'
// import React, { Component } from 'react'
// import firebase from 'firebase'
//
// import { Container } from '../components/Wrapper'
//
// // Initialize Firebase
// var config = {
// 	apiKey: 'AIzaSyBeX6x5Y-XAuSaHzm7Sr62vW4UPeV80wJA',
// 	authDomain: 'tujo-web.firebaseapp.com',
// 	databaseURL: 'https://tujo-web.firebaseio.com',
// 	projectId: 'tujo-web',
// 	storageBucket: '',
// 	messagingSenderId: '880999818613'
// }
// firebase.initializeApp(config)
//
// const auth = firebase.auth()
// auth.onAuthStateChanged(user => {
// 	if (user) {
// 		console.log('user', user)
// 	} else {
// 		// No user is signed in.
// 	}
// })
//
// // Create the first test user
// // 	auth.createUserWithEmailAndPassword('tobias@tujo.no', 'notsecure')
// // 	.catch(error => {
// // 		console.log('createUserWithEmailAndPassword Error:', error)
// // 	})
// auth
// 	.signInWithEmailAndPassword('tobias@tujo.no', 'notsecure')
// 	.catch(error => {
// 		console.log('signInWithEmailAndPassword Error:', error)
// 	})
//
// // Get a reference to the database service
// const db = firebase.database()
//
// export default class Firebase extends Component {
// 	state = {
// 		title: ''
// 	}
// 	constructor(props) {
// 		super(props)
// 		db.ref('title').on('value', snapshot => {
// 			console.log('snapshot.val()', snapshot.val())
// 			this.setState({ title: snapshot.val() })
// 		})
// 	}
// 	handleChange(e) {
// 		console.log('value', e.target.value)
// 		db.ref('title').set(e.target.value)
// 	}
// 	render() {
// 		return (
// 			<Container>
// 				<input
// 					type="input"
// 					value={this.state.title}
// 					onChange={this.handleChange.bind(this)}
// 				/>
// 			</Container>
// 		)
// 	}
// }
