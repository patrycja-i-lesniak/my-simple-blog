import React, { useState, useEffect } from 'react';
import { auth, logInWithEmailAndPassword } from 'config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ user, loading, error ] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(
		() => {
			if (error) {
				console.log(error.message);
			}
			if (loading) {
				// loader
				return;
			}
			if (user) {
				console.log('Signed In User', user.email);
				navigate('/');
			}
		},
		[ user, loading, error, navigate ]
	);

	return (
		<div className="form-container">
			<h5>Login</h5>

			<Form>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="d-grid d-md-flex justify-content-md-end">
					<Button
						variant="info"
						onClick={() => logInWithEmailAndPassword(email, password)}
					>
						Login
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
}
