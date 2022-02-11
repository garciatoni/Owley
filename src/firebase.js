// import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const analytics = getAnalytics(firebaseApp);

