import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmrYNfKtTwepW_PsDC9tcrNG9gTsb0UFs",
    authDomain: "webapp-bbcc5.firebaseapp.com",
    projectId: "webapp-bbcc5",
    storageBucket: "webapp-bbcc5.appspot.com",
    messagingSenderId: "1043401002430",
    appId: "1:1043401002430:web:f0caa1b71db8816060fdef"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;