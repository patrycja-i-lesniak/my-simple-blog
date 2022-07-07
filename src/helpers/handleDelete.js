import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const handleDelete = async (id) => {
	const docRef = doc(db, 'blogs', id);

	await deleteDoc(docRef);
};

export default handleDelete;
