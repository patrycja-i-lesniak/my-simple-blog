import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar () {
  return (
    <nav className='navbar'>
      <h1>Awesome Blog</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        </div>
    </nav>
  )
}
