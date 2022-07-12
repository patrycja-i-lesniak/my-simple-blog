import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import {
	Navbar,
	BlogDetails,
	Login,
	SignUp,
	CreateBlog,
	Footer,
	Profile,
	NewPage,
	SearchBox,
	BlogList
} from 'components';



function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchBox />
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
