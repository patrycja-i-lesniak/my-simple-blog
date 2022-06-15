import React, { useState } from 'react';

export default function SignIn() {
	const [ formData, setFormData ] = useState({
		email: '',
		password: '',
	});

	function handleChange(e) {
		setFormData({...formData,[e.target.id] : e.target.value})
        ;

	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
	}
	return (
		<div className="container">
			<form onSubmit={e => handleSubmit(e)} className="white">
				<h5 className="grey-text text-darken-3">Sign In</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={(e) => handleChange(e)} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={(e) => handleChange(e)}  />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Login</button>
				</div>
			</form>
		</div>
	);
}
