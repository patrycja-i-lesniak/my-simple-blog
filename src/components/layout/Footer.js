import { Navbar, Nav } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <Navbar fixed="bottom" bg="light" expand="lg" className="footer">
      <Nav.Link href="https://github.com/patrycja-i-lesniak">
        © 2022 Coded by Patrycja Leśniak
      </Nav.Link>
      <Nav.Link href="https://github.com/patrycja-i-lesniak">
        <BsGithub className="github" />
      </Nav.Link>
    </Navbar>
  );
}
