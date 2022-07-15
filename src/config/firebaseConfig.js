import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	addDoc
	//  query, orderBy, limit
	//  addDoc, deleteDoc, doc
} from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// config data
const firebaseConfig = {
	apiKey: 'AIzaSyCPB3Xg3bgSLrPm0rNrk8w5zfB0exzYv_U',
	authDomain: 'awesome-blog-60fb3.firebaseapp.com',
	projectId: 'awesome-blog-60fb3',
	storageBucket: 'awesome-blog-60fb3.appspot.com',
	messagingSenderId: '274346911860',
	appId: '1:274346911860:web:fd86765a5c494b2cabc921'
};

// init firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();

// init services
 const db = getFirestore();

// collection ref
const colRef = collection(db, 'blogs');

//get collection data
getDocs(colRef)
	.then((snapshot) => {
		let blogs = [];
		snapshot.docs.forEach((doc) => {
			blogs.push({ ...doc.data(), id: doc.id });
		});
	})
	.catch((err) => {
		console.log(err.message);
	});

// Signup
 const signUpWithEmailAndPassword = async (email, password, firstname, lastname) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			firstname,
			lastname,
			authProvider: 'local',
			email
		});
		console.log('Witaj',firstname);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// Logout
 function logout() {
	return signOut(auth);
}

// Login
const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

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

// Storage
async function upload(file, currentUser, setLoading) {
	const fileRef = ref(storage, currentUser.uid + '.png');

	setLoading(true);

	const snapshot = await uploadBytes(fileRef, file);
	const photoURL = await getDownloadURL(fileRef);

	updateProfile(currentUser, { photoURL });

	setLoading(false);
	alert('Uploaded file!');
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
//   signInWithGoogle,
  signUpWithEmailAndPassword,
//   sendPasswordReset,
  logout,
  colRef,
  upload,
};
