// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'sula-blog.firebaseapp.com',
  projectId: 'sula-blog',
  storageBucket: 'sula-blog.appspot.com',
  messagingSenderId: '671955580162',
  appId: '1:671955580162:web:da78dfa4931dc66c5ffe1b',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
