import React from "react";
import { Nav } from "react-bootstrap";
import { auth, user } from "../../config/firebase";

export default function SignedOutLinks() {
  const user = auth.currentUser;

  return (
    <Nav className="me-auto" hidden={user}>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  );
}
