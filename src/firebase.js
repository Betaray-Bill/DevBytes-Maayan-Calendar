import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuzT-8AJGqkXlw7C5q4mE83Q-fkg1SXDg",
    authDomain: "music-lofi.firebaseapp.com",
    projectId: "music-lofi",
    storageBucket: "music-lofi.appspot.com",
    messagingSenderId: "421899976187",
    appId: "1:421899976187:web:76b19c33b635097e201f5e",
    measurementId: "G-GFJWG5NZYS"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const storage = getStorage()
const db = getFirestore()
const auth = getAuth()
export { firebaseConfig }

export { app, db, storage, auth }