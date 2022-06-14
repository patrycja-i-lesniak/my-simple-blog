import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Navbar from 'components/Navbar';

// pages
import Home from 'pages/Home';
import Create from 'pages/Create';
import BlogDetails from 'pages/BlogDetails';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/blogs/:id" element={<BlogDetails />} />
					<Route path="create" element={<Create />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
