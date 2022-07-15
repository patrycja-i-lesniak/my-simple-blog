import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import {
	NavBar,
	BlogDetails,
	Login,
	SignUp,
	CreateBlog,
	Footer,
	Profile,
	NewPage,
	SearchBox,
	BlogList,
	Dashboard
} from 'components';

function App() {
	const [ isVisible, setIsVisible ] = useState(true);

	function toggleIsVisible() {
		setIsVisible(!isVisible);
	}
	return (
		<div className="App">
			<NavBar toggleIsVisible={toggleIsVisible} isVisible={isVisible} />
			{!isVisible && <SearchBox isVisible={isVisible} toggleIsVisible={toggleIsVisible} />}
			{/* <Dashboard/> */}
			<div className="content">
				<Routes>
					<Route path="/" element={<BlogList />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/blog/:id" element={<BlogDetails />} />
					<Route path="/create" element={<CreateBlog />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/newpage" element={<NewPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
