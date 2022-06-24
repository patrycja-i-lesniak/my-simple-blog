import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signup, useAuth, logout, login } from '../../config/firebaseConfig';

export default function SignedInLinks() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();

	async function handleLogout() {
		setLoading(true);
		try {
			await logout();
			console.log('Log Out');
		} catch (error) {
			alert('Error!');
		}
		setLoading(false);
	}
	return (
		<ul className="right hide-on-med-and-down">
			<li>
				<NavLink to="/create">New Blog</NavLink>
			</li>
			<li>
				<NavLink to="/" hidden={loading || !currentUser} onClick={handleLogout}>
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
