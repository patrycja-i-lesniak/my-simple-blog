import React, { useState } from 'react';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db, colRef } from '../../config/firebaseConfig';

export default function CreateBlog() {
	const [ formData, setFormData ] = useState({
		title: '',
		body: '',
		author: ' ',
		date: ''
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(colRef, formData);
		setFormData(e.target.reset());
		console.log(`New article with ID ${docRef.id} added`);
	};

	return (
		<div className="container ">
			<form onSubmit={(e) => handleSubmit(e)} className="white add">
				<h5 className="grey-text text-darken-3">Create New Blog</h5>
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
					<label  htmlFor="date"> </label>
					<input type="date" id="date" onChange={(e) => handleChange(e)} />
				</div>
				
				<div className="input-field">
					<button className="btn red darken-4 z-depth-0">Create</button>
				</div>
			</form>
		</div>
	);
}
