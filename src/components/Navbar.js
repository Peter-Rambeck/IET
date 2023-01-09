import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Logo from "../images/Logo.png";

function Navigation() {
  return (
    <>
      {/* Navbar logo */}
      <Navbar
        className="center flex-grow-1 justify-content-evenly"
        variant="light"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img
            alt="Indochina Explorers logo"
            src={Logo}
            width="35%"
            height="35%"
            //className="d-inline-block align-bottom"
          />
        </Navbar.Brand>
      </Navbar>
      {/* Navbar menu */}
      <Navbar flex-lg-column="true" bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto parent ">
              <Nav.Link href="/thailand">Thailand</Nav.Link>
              <Nav.Link href="/vietnam">Vietnam</Nav.Link>
              <Nav.Link href="/tonkin">Tonkin</Nav.Link>
              <Nav.Link href="#link">Malaysia</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              {/*
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { Navigation };
