import {useState, useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth} from 'firebase/auth'


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPB3Xg3bgSLrPm0rNrk8w5zfB0exzYv_U",
  authDomain: "awesome-blog-60fb3.firebaseapp.com",
  projectId: "awesome-blog-60fb3",
  storageBucket: "awesome-blog-60fb3.appspot.com",
  messagingSenderId: "274346911860",
  appId: "1:274346911860:web:fd86765a5c494b2cabc921",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);

// Add new user
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Custom Hook
export function useAuth() {
	const [ currentUser, setCurrentUser ] = useState();
	// if (user) {
	// 		const uid = user.uid;
	// 		console.log('userID', uid)
	// 	}

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}
