import React, { useState } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import { blogRef } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

export default function SearchBox({ isVisible }) {
	const [ title, setTitle ] = useState();
	const navigate = useNavigate();

	function handleChange(e) {
		setTitle(e.target.value);
	}

	const handleQuerySearch = async (e) => {
		e.preventDefault();

		const userInputName = title;
		console.log('userInputName:', userInputName);

		const q = query(blogRef, where('title', '==', userInputName));

		const snapshot = await getDocs(q);

		const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		console.log(results);

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			console.log(doc.id, ' => ', doc.data());

			navigate('/newpage');
		});
	};

	return (
		<Container fluid className="search-container" isVisible={!isVisible}>
			<form className="search-form" onSubmit={(e) => handleQuerySearch(e)}>
				<input
					className="search-input"
					placeholder="Search article by title..."
					onChange={(e) => handleChange(e)}
					minLength="5"
				/>
				<BiSearch  className="search-icon" />
			</form>
		</Container>
	);
}
