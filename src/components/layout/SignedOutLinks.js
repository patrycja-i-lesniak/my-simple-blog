import React from "react";
import { Nav } from "react-bootstrap";

import { auth } from "../../config/firebase";

export default function SignedOutLinks() {
  const user = auth.currentUser;

  return (
    <Nav className="me-auto" hidden={user}>
      <Nav.Link href="/signup">Sign up</Nav.Link>
      <Nav.Link href="/login">Log in</Nav.Link>
    </Nav>
  );
}
