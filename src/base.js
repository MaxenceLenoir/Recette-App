import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeaY8svifYRa_azpoFOk5LaKZ1D4zJNDY",
  authDomain: "recette-app-b4451.firebaseapp.com",
  databaseURL: "https://recette-app-b4451.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
