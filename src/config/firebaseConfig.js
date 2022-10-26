import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	// addDoc
	//  query, orderBy, limit
	//  addDoc, deleteDoc, doc
} from 'firebase/firestore';
import {
	getAuth,
	// createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile,
	setPersistence,
	browserSessionPersistence
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// config data
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// init firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();


onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		// ...
	} else {
		// User is signed out
		// ...
	}
});

// Logout
function logout() {
	return signOut(auth);
}

// init services
const db = getFirestore();

// collection ref
const blogRef = collection(db, 'blogs');


//get collection data
getDocs(blogRef)
	.then((snapshot) => {
		let blogs = [];
		snapshot.docs.forEach((doc) => {
			blogs.push({ ...doc.data(), id: doc.id });
		});
	})
	.catch((err) => {
		console.log(err.message);
	});

// // Signup

// const signUpWithEmailAndPassword = async (email, password
// 	// , firstname, lastname
// 	) => {
// 	try {
// 		const res = await createUserWithEmailAndPassword(auth, email, password);
// 		const user = res.user;
// 		await addDoc(collection(db, 'users'), {
// 			uid: user.uid,
// 			// firstname,
// 			// lastname,
// 			authProvider: 'local',
// 			email,
// 			password
// 		});
// 		// console.log('Witaj', firstname);
	
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// Sign in
setPersistence(auth, browserSessionPersistence);

function createUser(data, navigate) {
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
}

// Custom Hook
function useAuth() {
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
	app,
	auth,
	useAuth,
	storage,
	db,
	createUser,
	// logInWithEmailAndPassword,
	//   signInWithGoogle,
	// signUpWithEmailAndPassword,
	//   sendPasswordReset,
	logout,
	blogRef,
	upload
};
