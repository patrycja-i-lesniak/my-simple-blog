import React, { useState, useEffect } from 'react';
import { getFirestore, onSnapshot, collection } from 'firebase/firestore';
import BlogSummary from './BlogSummary';

export default function BlogList() {
	const [ blogs, setBlogs ] = useState([]);
	const db = getFirestore();
	console.log(blogs);

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
