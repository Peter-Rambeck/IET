import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function SubNav() {
  return (
    <>
      <Container className="spacing">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Turen i overblik</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Rute og hojdepunkter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">dagsprogram</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}

export default SubNav;
