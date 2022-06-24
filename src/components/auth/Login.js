import React, { useState, useRef } from 'react';
import { useAuth, login } from '../../config/firebaseConfig';

export default function Login() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleLogin() {
		setLoading(true);
		try {
			await login(emailRef.current.value, passwordRef.current.value);
			console.log('Currently logged in as:');
		} catch (error) {
			alert('Error!');
		}
		setLoading(false);
	}

	return (
		<div className="container">
			<div id="fields" className="white">
				<h5 className="grey-text text-darken-3">Login</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" ref={emailRef} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={passwordRef} />
				</div>
				<div className="input-field">
					<button
						disabled={loading || currentUser}
						className="btn red darken-4 z-depth-0"
						onClick={handleLogin}
					>
						Log In
					</button>
				</div>
			</div>
		</div>
	);
}
