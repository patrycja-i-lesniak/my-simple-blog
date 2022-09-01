import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth();

// Crate user with email and password
function createUser(data, navigate) {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log("Response user: ", response.user);
      navigate("/profile");
    })
    .catch((err) => {
      console.log(err.code);
    });
}

//Get the currently signed-in user
function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return unsub;
  }, []);
  if (user) {
    const uid = user.uid;
    // console.log("Currently signed-in user : ", user.email);
  }

  return user;
}

export { app, auth, useAuth, createUser };
