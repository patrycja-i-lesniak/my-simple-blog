import { setDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

 const handleEdit = async (id) => {
		const title = prompt('enter title');
		const body = prompt('enter body');
		const author = prompt('enter author');

		const docRef = doc(db, 'blogs', id);
		const payload = { title, body, author };

		setDoc(docRef, payload);
	};

    export default handleEdit;