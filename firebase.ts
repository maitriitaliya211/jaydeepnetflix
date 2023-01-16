// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6bFLs_5J2dXJ-dclTa8AqE77r_GGAJCc",
  authDomain: "netflix-clone-65c34.firebaseapp.com",
  projectId: "netflix-clone-65c34",
  storageBucket: "netflix-clone-65c34.appspot.com",
  messagingSenderId: "937199682711",
  appId: "1:937199682711:web:87ccd1945ce7d28be915d2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }