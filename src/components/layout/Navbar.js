import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLiks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';
import { useAuth, logout, colRef } from '../../config/firebaseConfig';
import { Icon } from 'react-materialize';

export default function Navbar() {
	const currentUser = useAuth();
	const [ photoURL, setPhotoURL ] = useState(
		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
	);

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
	return (
		<div>
			<nav>
				<Icon right className="grey-text">
					search
				</Icon>
				<NavLink to="/" className="black-text header">
					SIMPLE VEGE LIFE
				</NavLink>
				<SignedInLiks />
				<SignedOutLinks />
			</nav>
			<subnav>
				<NavLink to="/">
					Home<Icon right className="grey-text icon">
						{' '}
						keyboard_arrow_down
					</Icon>
				</NavLink>
				<NavLink to="/">
					Recipes<Icon right className="grey-text icon">
						{' '}
						keyboard_arrow_down
					</Icon>
				</NavLink>
				<NavLink to="/">About</NavLink>
				<NavLink to="/">Contact</NavLink>
			</subnav>
		</div>
	);
}
