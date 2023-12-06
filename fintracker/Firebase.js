import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsGI_61xfd_P2xwMiL6bkOxdM8oiGKKQA",
  authDomain: "fintracker-41073.firebaseapp.com",
  projectId: "fintracker-41073",
  storageBucket: "fintracker-41073.appspot.com",
  messagingSenderId: "129177232003",
  appId: "1:129177232003:web:1d3e6be5d879f95dee71b6",
  measurementId: "G-CJFV8DBHH7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app, createUserWithEmailAndPassword };