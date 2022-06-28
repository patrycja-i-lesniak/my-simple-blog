import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogSummary({ blog }) {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/blog/:id');
	};
	return (
		<div className="card z-depth-0 blog-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title red-text text-darken-4">{blog.title}</span>
				<p>{blog.author}</p>
				<p>{blog.date}</p>
				{blog.body.length > 200 && (
					<p className="grey-text">{blog.body.slice(0, 200)}...</p>
				)}
				<button onClick={handleNavigate} className="btn red darken-4 z-depth-0">
					Read more
				</button>
			</div>
		</div>
	);
}
