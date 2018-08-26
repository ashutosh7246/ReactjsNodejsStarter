import firebase from 'firebase'


// Replace with your configuration from firebase developer console
var config = {
    apiKey: "AIzaSyDjsvEXLkx0FVbbA8nIIEtvysvQ-2Iwrzg",
    authDomain: "reactjsnodejsdemo.firebaseapp.com",
    databaseURL: "https://reactjsnodejsdemo.firebaseio.com",
    projectId: "reactjsnodejsdemo",
    storageBucket: "reactjsnodejsdemo.appspot.com",
    messagingSenderId: "756918076866"
  };

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;