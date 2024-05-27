// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'next-blog-212fa.firebaseapp.com',
  projectId: 'next-blog-212fa',
  storageBucket: 'next-blog-212fa.appspot.com',
  messagingSenderId: '247207026676',
  appId: '1:247207026676:web:adf34b2c6cb1aa057823a1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
