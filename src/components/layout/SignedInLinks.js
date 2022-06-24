import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth, logout } from '../../config/firebaseConfig';

export default function SignedInLinks() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		setLoading(true);
		try {
			await logout();
			console.log('Log Out');
		} catch (error) {
			alert('Error!');
		}
		setLoading(false);
		navigate('/');
	}
	return (
		<ul className="right hide-on-med-and-down" hidden={loading || !currentUser}>
			<li>
				<NavLink to="/create">New Blog</NavLink>
			</li>
			<li>
				<NavLink to="/" onClick={handleLogout}>
					Log Out
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/"
					className="btn btn-floating yellow lighten-2 grey-text text-darken-2 "
				>
					PL
				</NavLink>
			</li>
		</ul>
	);
}
