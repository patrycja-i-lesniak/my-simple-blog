import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';

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

// init services
const db = getFirestore(app);

// collection ref
const colRef = collection(db, 'blogs');

//get collection data
getDocs(colRef)
	.then((snapshot) => {
		let blogs = [];
		snapshot.docs.forEach((doc) => {
			blogs.push({ ...doc.data(), id: doc.id });
		});
		console.log(blogs);
	})
	.catch((err) => {
		console.log(err.message);
	});

//adding documents
// const addBlogForm = document.querySelector('.add');
// addBlogForm.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	addDoc(colRef, {
// 		title: addBlogForm.title.value,
// 		body: addBlogForm.body.value,
// 		author: addBlogForm.author.value
// 	}).then(() => {
// 		addBlogForm.reset();
// 	});
// });

// deleting documents
// const deleteBlogForm = document.querySelector('.delete');
// deleteBlogForm.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const docRef = doc(db, 'blogs', deleteBlogForm.id.value);

// 	deleteDoc(docRef).then(() => {
// 		deleteBlogForm.reset();
// 	});
// });

const auth = getAuth();

export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
	return signOut(auth);
}

export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook
export function useAuth() {
	const [ currentUser, setCurrentUser ] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}

// signInWithPopup(auth, new GoogleAuthProvider());

// onSnapshot(colRef, snapshot => {
// 	const blog= snapshot.data();
// })
