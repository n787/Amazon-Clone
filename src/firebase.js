// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTI3vig6pXmNdDx3-_lV9hpWvixHoOlgs",
    authDomain: "clone-4cedc.firebaseapp.com",
    projectId: "clone-4cedc",
    storageBucket: "clone-4cedc.appspot.com",
    messagingSenderId: "404167104433",
    appId: "1:404167104433:web:f0457e49bebee2f997cf90",
    measurementId: "G-7EQ7GH6Q57"
});

const auth = firebase.auth();

export {auth};