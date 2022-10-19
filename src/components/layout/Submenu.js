import React, { useState } from "react";
import { useAuth } from "../../config/firebaseConfig";
import { Container, Nav } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

export default function Submenu() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  return (
    <Container>
      <Nav defaultActiveKey="/" as="ul" className="submenu">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/recipes">
            Recipes
            <IoIosArrowDown />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li" hidden={loading || !currentUser}>
          <Nav.Link href="/create">New blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
