import { Navbar, Nav } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Mailto from './Mailto';

export default function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="light" expand="lg" className="justify-content-center">
        <Nav.Link href="https://github.com/patrycja-i-lesniak">
          {" "}
          &copy; 2022 by Patrycja Leśniak
        </Nav.Link>
        <Nav.Link href="https://github.com/patrycja-i-lesniak" className="github">
          <BsGithub style={{margin:'0 10px'}}/>
        </Nav.Link>
        <Mailto email="patrycja.lesniak@gmail.com" subject="Hello" body="Hello world!">
          Mail me!
        </Mailto>
      </Navbar>
    </>
  );
}
