import useFetch from 'helpers/useFetch';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
const history= useHistory();

	const handleClick = ()=> {
fetch('http://localhost:8000/blogs/' + blog.id, {
	method: 'DELETE'
}).then(()=>{
history.push('/');
})
	}
	return (
		<div className="blog-details">
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<p> {blog.body}</p>
					<button onClick={handleClick}>delete</button>
				</article>
			)}
		</div>
	);
}
