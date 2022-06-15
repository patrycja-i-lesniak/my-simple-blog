import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLiks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';

export default function Navbar() {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					AwesomeBlog
				</Link>
        <SignedInLiks/>
        <SignedOutLinks/>
				{/* <Link to="/" className="brand-logo">
					Home
				</Link>
				<Link to="/create">New Blog</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign up</Link>*/}
			</div>
		</nav>
	);
}

// export default function Navbar () {
//   return (
//     <nav className='navbar'>
//       <h1>Awesome Blog</h1>
//       <div className='links'>
//         <Link to="/">Home</Link>
//         <Link to="/create">New Blog</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign up</Link>
//         </div>
//     </nav>
//   )
// }
