import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCY3ngI2TpXhPZ19hN-21OruX4J-bI9tS0",
    authDomain: "salud-9a7a3.firebaseapp.com",
    projectId: "salud-9a7a3",
    storageBucket: "salud-9a7a3.appspot.com",
    messagingSenderId: "851588400499",
    appId: "1:851588400499:web:40520c2e9a95fe281f3106"
}

const fire = firebase.initializeApp(config);

export {
  fire as default,
  firebase
}