import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLiks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';

export default function Navbar() {
	return (
		<nav className="nav-extended">
			<div className="nav-wrapper orange darken-4 ">
				<div className="container">
					<NavLink to="/" className="brand-logo ">
						My Site
					</NavLink>
					<SignedInLiks />
					<SignedOutLinks />
				</div>
			</div>
		</nav>
	);
}
