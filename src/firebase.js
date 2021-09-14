import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDlQDVSP_lZAd5IQA5tlO2F2w1mk9434Q8",
    authDomain: "udemy-app-7da04.firebaseapp.com",
    projectId: "udemy-app-7da04",
    storageBucket: "udemy-app-7da04.appspot.com",
    messagingSenderId: "772105344095",
    appId: "1:772105344095:web:95cea33029d3bd8950f7ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()



  export {db, auth}