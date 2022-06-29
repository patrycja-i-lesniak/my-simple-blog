import React, { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import BlogSummary from './BlogSummary';
import {db} from '../../config/firebaseConfig'

export default function BlogList() {
	const [ blogs, setBlogs ] = useState([]);

	useEffect(() => {
		onSnapshot(collection(db, 'blogs'), (snapshot) => {
			setBlogs(snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id })));
		});
	}, []);
	
	return (
		<div className="blog-list section">
			{blogs &&
				blogs.map((blog) => {
					return <BlogSummary blog={blog} key={blog.id} />;
				})}
		</div>
	);
}
