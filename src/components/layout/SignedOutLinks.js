import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../config/firebaseConfig';

export default function SignedOutLinks() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();
	return (
		<ul className="right hide-on-med-and-down" hidden={loading || currentUser}>
			<li>
				<NavLink to="/signup">Signup</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</ul>
	);
}
