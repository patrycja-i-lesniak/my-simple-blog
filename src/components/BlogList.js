import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs, title }) {
	return (
		<div className="blog-list">
			<h2 className="blog-title">{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>{blog.body}</p>
						<p>Written by {blog.author}</p>
					</Link>

					{/* <button onClick={()=> handleDelete(blog.id)}>delete blog</button> */}
				</div>
			))}
		</div>
	);
}
