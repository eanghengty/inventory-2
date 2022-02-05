import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth";
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyAN15T3WFJlK6d-kJVULXHaVqfkv1G3lJ4",
    authDomain: "inventory1-121ba.firebaseapp.com",
    databaseURL: "https://inventory1-121ba-default-rtdb.firebaseio.com",
    projectId: "inventory1-121ba",
    storageBucket: "inventory1-121ba.appspot.com",
    messagingSenderId: "1050236515604",
    appId: "1:1050236515604:web:2f2df92c11ad466702be01"
  };


const auth1 = initializeApp(firebaseConfig)
const fireDb= firebase.initializeApp(firebaseConfig)
export const auth = getAuth(auth1)
export default fireDb.database().ref()
