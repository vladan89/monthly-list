import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
const settings = {
  timestampsInSnapshots: true
}
const firestore = firebaseApp.firestore()
export default firestore
firestore.settings(settings)
