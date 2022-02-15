// import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGBNFNyyrHTNgBN6wiTee9NL7ODN59aDI",
    authDomain: "owley-21cc5.firebaseapp.com",
    projectId: "owley-21cc5",
    storageBucket: "owley-21cc5.appspot.com",
    messagingSenderId: "796417856443",
    appId: "1:796417856443:web:2e0f76e233ff17e9346a9e",
    measurementId: "G-5RYFPKYLPL"
};


const App = initializeApp(firebaseConfig);
export const db = getFirestore(App);
export const auth = getAuth(App);
export const storage = getStorage(App);
export const analytics = getAnalytics(App);

