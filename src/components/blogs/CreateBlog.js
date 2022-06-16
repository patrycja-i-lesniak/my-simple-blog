import React, { useState } from 'react';

export default function CreateBlog() {
	const [ formData, setFormData ] = useState({
		title: '',
		body: '',
		author: ' '
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData)
   
	}
	return (
		<div className="container">
			<form onSubmit={(e) => handleSubmit(e)} className="white">
				<h5 className="grey-text text-darken-3">Sign In</h5>
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" onChange={(e) => handleChange(e)} />
				</div>
				<div className="input-field">
					<label htmlFor="body">Blog text</label>
					<textarea
						type="text"
						id="body"
						className="materialize-textarea"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="author">Author</label>
					<input type="text" id="author" onChange={(e) => handleChange(e)} />
				</div>
				<div className="input-field">
					<button className="btn red darken-4 z-depth-0">Create</button>
				</div>
			</form>
		</div>
	);
}
