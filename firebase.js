import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBveDvA6i3D9pIQ4elaqFdSXqI6XToNY-k",
    authDomain: "loot-88b5b.firebaseapp.com",
    projectId: "loot-88b5b",
    storageBucket: "loot-88b5b.appspot.com",
    messagingSenderId: "469162836222",
    appId: "1:469162836222:web:5f245282df226a3c7d65af",
    measurementId: "G-48506V5CQ6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };