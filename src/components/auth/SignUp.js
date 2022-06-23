import React, { useState, useRef } from 'react';
import { signup, useAuth } from '../../config/firebaseConfig';

export default function SignUp() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const firstNameRef = useRef();
	const lastNameRef= useRef();

	async function handleSignup() {
		setLoading(true);
		try {
		await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value);
		console.log('Currently logged in as:', firstNameRef.current.value, lastNameRef.current.value )
		} catch {
		alert("Error!");
		}
		setLoading(false);
	}

	return (
		<div className="container">
			{currentUser ? <p>Hello { firstNameRef.current.value} {lastNameRef.current.value}!</p>: null}
			<div id="fields" className="white">
				<h5 className="grey-text text-darken-3">Sign Up</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" ref={emailRef} />
				</div>
				<div className="input-field">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName"  ref={firstNameRef}/>
				</div>
				<div className="input-field">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName"  ref={lastNameRef} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={passwordRef} />
				</div>
				<div className="input-field">
					<button
						disabled={loading || currentUser}
						className="btn red darken-4 z-depth-0"
						onClick={handleSignup}
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}
