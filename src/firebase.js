import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'


const firebaseApp=firebase.initializeApp( {
    apiKey: "AIzaSyC48Tys7br4TEh-Uld8xqVJ2elQFOF32O0",
    authDomain: "todos-list-e929c.firebaseapp.com",
    projectId: "todos-list-e929c",
    storageBucket: "todos-list-e929c.appspot.com",
    messagingSenderId: "93088800012",
    appId: "1:93088800012:web:baaa13bd8bb1fb7f51fd29",
    measurementId: "G-276L4KQGWW"
  })

  const db=firebaseApp.firestore()

  export default db