import React, { useState, useEffect } from 'react';
import { useAuth, upload } from '../../config/firebaseConfig';
import { Button, Form } from 'react-bootstrap';

export default function Profile() {
	const currentUser = useAuth();
	const [ photo, setPhoto ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ photoURL, setPhotoURL ] = useState(
		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
	);

	function handleChange(e) {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	}

	function handleClick() {
		upload(photo, currentUser, setLoading);
	}
	

	useEffect(
		() => {
			if (currentUser && currentUser.photoURL) {
				setPhotoURL(currentUser.photoURL);
			}
		},
		[ currentUser ]
	);

console.log(photoURL);

	return (
		<div className="fields container">
			{currentUser && (
				<p>
					Hello <span>{currentUser.email}</span>!
				</p>
				
			)}

			<input type="file" onChange={handleChange} />
			<Button disabled={loading || !photo} onClick={handleClick} variant="btn btn-secondary">
				Upload
			</Button>
			<img src={photoURL} alt="Avatar" className="avatar big" />
		</div>
	);
}
