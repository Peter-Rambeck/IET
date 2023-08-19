import { Container, Row, Card, Col } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function TopBodyBadge({ props }) {
  return (
    <>
      <Container>
        <Row className={["spacing", "center"].join(" ")}>
          <Col
            className="spacing"
            // d-flex
            lg={true}
          >
            <>
              <Card
                style={{
                  border: "0",
                }}
              >
                <Card.Img
                  variant="top"
                  src={props.badge}
                  alt={props.alt}
                  style={{
                    width: "30%",
                    height: "30%",
                  }}
                />
                <Card.Body>
                  <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopBodyBadge;
