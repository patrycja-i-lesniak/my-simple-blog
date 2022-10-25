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
        <NavLink end to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="add" to="blogs/new" hidden={loading || !currentUser}>
          Add new blog
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}

// export default function Submenu() {
//   const [loading, setLoading] = useState(false);
//   const currentUser = useAuth();
//   return (
//     <Container>
//       <Nav defaultActiveKey="/" as="ul" className="submenu">
//         <Nav.Item as="li">
//           <Nav.Link href="/">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item as="li">
//           <Nav.Link href="/blogs">
//             Recipes
//             <IoIosArrowDown />
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item as="li">
//           <Nav.Link href="/about">About</Nav.Link>
//         </Nav.Item>
//         <Nav.Item as="li">
//           <Nav.Link href="/contact">Contact</Nav.Link>
//         </Nav.Item>

//         <Nav.Item as="li" hidden={loading || !currentUser}>
//           <Nav.Link href="/new">New blog</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Container>
//   );
// }
