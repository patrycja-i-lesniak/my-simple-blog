import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

export default function Home() {
	const [ blogs, setBlogs ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	// const handleDelete = (id) => {
	// 	const newBlogs = blogs.filter((blog) => blog.id !== id);
	// 	setBlogs(newBlogs);
	// };

	useEffect(() => {
		// setTimeout only simulates a real fetch api
		setTimeout(() => {
			fetch('http://localhost:8000/blogs ')
				.then((res) => {
					if (!res.ok) {
						throw Error('could not fetch the data for that resource');
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}, 1000);
	}, []);
	return (
		<div className="home">
			{error &&<div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs!" />}
			{/* <BlogList blogs={blogs.filter(({ author }) => author === 'someone')} title="Someone's blogs!" handleDelete={handleDelete}/> */}
		</div>
	);
}
