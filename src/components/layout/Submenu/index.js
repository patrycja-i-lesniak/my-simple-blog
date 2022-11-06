import React, { useState } from "react";
// import { Container, Nav } from "react-bootstrap";
// import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAuth } from "config/firebaseConfig";
import "./style.css";

export default function Submenu() {
  const currentUser = useAuth();

  const [loading, setLoading] = useState(false);

  return (
    <nav>
      <ul className="submenu">
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/articles">
          Articles
        </NavLink>
        <NavLink className="add" to="articles/new" hidden={loading || !currentUser}>
          Add new article
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
