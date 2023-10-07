import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav } from "react-bootstrap";
import Logo from "../images/Logo.png";
import "../assets/css/navbar.css";
import ToggleBootstrap from "../components/ToggleBootstrap";

function Navigation() {
  /*
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };
*/

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
            <Nav className="mx-auto parent sb-menu-transition">
              {/*<Nav.Link href="/thailand">Thailand</Nav.Link>*/}
              <ul class="nav navbar-nav">
                <li>
                  <div class="dropdown">
                    <Nav.Link href="/vietnam">Vietnam</Nav.Link>
                    <div class="dropdown-content">
                      <Nav.Link href="/tonkin">Tonkin</Nav.Link>
                    </div>
                  </div>
                </li>
                <Nav.Link href="#link">Malaysia</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { Navigation };
