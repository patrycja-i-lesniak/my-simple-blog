import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "config/firebaseConfig";
import "./style.css";

export default function Submenu() {
  const currentUser = useAuth();

  return (
    <nav>
      <ul className="submenu">
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/articles">
          Articles
        </NavLink>
        <NavLink className="add" to="articles/new" hidden={!currentUser}>
          Add new article
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
