import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogDetails from './components/blogs/BlogDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// pages
// import Home from './pages/Home';
import Create from './pages/Create';
// import BlogDetails from './pages/BlogDetails';
// import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/blog/:id" element={<BlogDetails />}/>
					{/* <Route path="create" element={<Create/>} /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
