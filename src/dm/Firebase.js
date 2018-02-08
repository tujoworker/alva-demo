// Initialize Firebase
import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBeX6x5Y-XAuSaHzm7Sr62vW4UPeV80wJA',
    authDomain: 'tujo-web.firebaseapp.com',
    databaseURL: 'https://tujo-web.firebaseio.com',
    projectId: 'tujo-web',
    storageBucket: '',
    messagingSenderId: '880999818613'
  })
}

const auth = firebase.auth()
auth.onAuthStateChanged(user => {
  if (user) {
    // console.log('user', user)
  } else {
    // No user is signed in.
  }
})
// Create the first test user
// 	auth.createUserWithEmailAndPassword('tobias@tujo.no', 'notsecure')
// 	.catch(error => {
// 		console.log('createUserWithEmailAndPassword Error:', error)
// 	})
if (!auth.currentUser)
  auth
    .signInWithEmailAndPassword('tobias@tujo.no', 'notsecure')
    .catch(error => {
      console.log('signInWithEmailAndPassword Error:', error)
    })

// Get a reference to the database service
const db = firebase.database()

export { db, auth, firebase }
export default db
