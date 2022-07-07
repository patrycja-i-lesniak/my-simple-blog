import React, { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import BlogSummary from './BlogSummary';
import { db} from '../../config/firebaseConfig';
import { handleQueryDelete } from 'helpers';

export default function BlogList() {
	const [ blogs, setBlogs ] = useState([]);

	useEffect(() => {
		onSnapshot(collection(db, 'blogs'), (snapshot) => {
			setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, []);

	return (
		<div className="blog-list section">
			<button
				className="btn orange z-depth-0  grey-text text-darken-3"
				onClick={handleQueryDelete}
			>
				query delete
			</button>
			{blogs &&
				blogs.map((blog) => {
					return <BlogSummary blog={blog} key={blog.id} />;
				})}
		</div>
	);
}
