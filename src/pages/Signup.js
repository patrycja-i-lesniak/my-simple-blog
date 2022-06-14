import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const [ formData, setFormData ] = useState({
		email: '', // required
		password: '', // required
		username: '' // optional
	});

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		fetch('http://localhost:8000/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.then(() => {
                navigate('/login');
            });
	}

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<div>
			<h2>Signup Form</h2>
			<form className="login-form" onSubmit={(e) => handleSubmit(e)}>
				<input
					className="input"
					type="text"
					placeholder="Username"
					value={formData.username}
					name="username"
					onChange={(e) => handleChange(e)}
				/>
				<input
					className="input"
					type="text"
					placeholder="Email"
					value={formData.email}
					name="email"
					onChange={(e) => handleChange(e)}
				/>
				<input
					className="input"
					type="text"
					placeholder="Password"
					value={formData.password}
					name="password"
					onChange={(e) => handleChange(e)}
				/>
				<button className="button" type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
}
