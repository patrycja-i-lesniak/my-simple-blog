import React, { useState } from 'react';

export default function Create() {
	const [ title, setTitle ] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Patrycja');

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form />
			<label>Blog title:</label>
			<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
			<label>Blog body</label>
			<textarea required value={body} onChange ={(e) => setBody(e.target.value)}/>
			<label>Blog author:</label>
			<select>
				<option value={author} onChange={(e)=> setAuthor(e.target.value)}>Patrycja</option>
			</select>
			<button>Add blog</button>
		</div>
	);
}
