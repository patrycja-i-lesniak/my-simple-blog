import useFetch from 'helpers/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

	return (
		<div className="blog-details">
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<p> {blog.body}</p>
				</article>
			)}
		</div>
	);
}
