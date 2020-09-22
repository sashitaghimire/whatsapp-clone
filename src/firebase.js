import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd7FQ6d40kzI_1zS98cw_lLnn9177ft4E",
  authDomain: "whatsapp-mern-be374.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-be374.firebaseio.com",
  projectId: "whatsapp-mern-be374",
  storageBucket: "whatsapp-mern-be374.appspot.com",
  messagingSenderId: "1055110466946",
  appId: "1:1055110466946:web:0116347a261b0f6240939b",
  measurementId: "G-R3SDCY68CQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;