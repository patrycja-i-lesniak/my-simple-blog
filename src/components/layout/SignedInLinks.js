import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { signOut } from "firebase/auth";

import { auth } from "../../config/firebase";

export default function SignedInLinks() {
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Log Out");
      })
      .catch((error) => {
        alert("Error!");
      });
    setLoading(false);
    navigate("/");
  }

  return (
    <Nav className="me-auto" hidden={loading || !user}>
      <Nav.Link href="/" onClick={(e) => handleLogout(e)}>
        Log Out
      </Nav.Link>
      <Nav.Link href="/profile">Your Profile</Nav.Link>
    </Nav>
  );
}
