import { Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Logo from "../Images/Logo.png";

export default function Header() {
  return (
    <Navbar bg="" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Indochina Explorers logo"
            src={Logo}
            width="30%"
            height="30%"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-self: flex-end">
            <Nav.Link href="#home">Thailand crazy</Nav.Link>
            <Nav.Link href="/vietnam">Vietnam</Nav.Link>
            <Nav.Link href="#link">Malaysia</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
