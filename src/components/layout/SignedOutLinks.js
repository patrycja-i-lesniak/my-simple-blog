import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../config/firebaseConfig';
import { Nav } from 'react-bootstrap';

export default function SignedOutLinks() {
	const currentUser = useAuth();
	return (
		<Nav className="me-auto" hidden={currentUser}>
			<Nav.Link href="/signup">Signup</Nav.Link>
			<Nav.Link href="/login">Login</Nav.Link>
		</Nav>
	);
}
