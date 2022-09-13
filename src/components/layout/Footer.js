import { Navbar, Nav } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import {Mailto} from 'components';

export default function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="light" expand="lg" className="footer">
        <Nav.Link href="https://github.com/patrycja-i-lesniak">
          {" "}
          &copy; 2022 by Patrycja Leśniak
        </Nav.Link>
        <Nav.Link href="https://github.com/patrycja-i-lesniak">
          <BsGithub className="github" />
        </Nav.Link>
        <Mailto className='mailMe' email="foo@bar.baz" subject="Hello" body="Hello world!">
          Mail me!
        </Mailto>
      </Navbar>
    </>
  );
}
