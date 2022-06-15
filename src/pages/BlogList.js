import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';

export default function BlogList({ blogs, title }) {

	return (
		<div className="blog-content">
			<h2 className="blog-title">{title}</h2>
			<div className="blog-list">
				{blogs.map((blog) => (
					<div className="blog-preview" key={blog.id}>
						<Link to={`/blogs/${blog.id}`}>
							<h3>{blog.title}</h3>
							<p className="blog-author">
								Written by <span>{blog.author}</span>
							</p>
							<p>{blog.body.slice(0, 100)}...</p>
						</Link>

						<Routes>
							<Route path={`${blog.id}`} element={<BlogDetails />}/>
						</Routes>
					</div>
				))}
			</div>
		</div>
	);
}
