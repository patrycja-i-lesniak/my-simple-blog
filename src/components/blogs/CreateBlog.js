import React, { useState, useRef } from 'react';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db, colRef } from '../../config/firebaseConfig';
import { useAuth, login } from '../../config/firebaseConfig';
import { Button, Icon } from 'react-materialize';

export default function CreateBlog() {
	const [ formData, setFormData ] = useState({
		title: '',
		body: '',
		author: ' ',
		timestamp: serverTimestamp()
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
					<input
						type="text"
						id="title"
						onChange={(e) => handleChange(e)}
						minLength="5"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="body">Blog text</label>
					<textarea
						type="text"
						id="body"
						className="materialize-textarea"
						onChange={(e) => handleChange(e)}
						minLength="100"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="author">Author</label>
					<input
						type="text"
						id="author"
						onChange={(e) => handleChange(e)}
						minLength="5"
						required
					/>
				</div>

				<Button
					node="button"
					type="submit"
					waves="light"
					className="btn waves-effect waves-light orange z-depth-0"
				>
					Send
					<Icon right>send</Icon>
				</Button>
			</form>
		</div>
	);
}
