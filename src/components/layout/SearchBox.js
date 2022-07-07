import React, { useState } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import { colRef } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, TextInput } from 'react-materialize';

export default function SearchBox() {
	const [ title, setTitle ] = useState();
	const navigate = useNavigate();

	function handleChange(e) {
		setTitle(e.target.value);
	}

	const handleQuerySearch = async (e) => {
		e.preventDefault();

		const userInputName = title;
		console.log('userInputName:', userInputName);

		const q = query(colRef, where('title', '==', userInputName));

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
		<form className="search-form input-field" onSubmit={(e) => handleQuerySearch(e)}>
			<TextInput
				id="TextInput-78"
				label="Search article by title"
				onChange={(e) => handleChange(e)}
				minLength="5"
				inputClassName="grey-text"
				className="search-form"
			/>
			<Button node="button" type="submit" waves="light" className="orange">
				Search
				<Icon right>search</Icon>
			</Button>
		</form>
	);
}
