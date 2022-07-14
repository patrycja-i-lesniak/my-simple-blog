import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth, logout, colRef } from '../../config/firebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';
import { Nav } from 'react-bootstrap';

export default function SignedInLinks() {
	const [ loading, setLoading ] = useState(false);
	const currentUser = useAuth();
	const navigate = useNavigate();
	const [ photoURL, setPhotoURL ] = useState(
		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
	);
	const [ title, setTitle ] = useState();

	useEffect(
		() => {
			{
				currentUser && currentUser.photoURL
					? setPhotoURL(currentUser.photoURL)
					: setPhotoURL(photoURL);
			}
		},
		[ currentUser ]
	);

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
		<Nav className="me-auto" hidden={loading || !currentUser}>
			<Nav.Link href="/" onClick={handleLogout}>
				Log Out
			</Nav.Link>
			<Nav.Link href="/profile">Your Profile</Nav.Link>
		</Nav>
	);
}
