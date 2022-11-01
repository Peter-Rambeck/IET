import { Card, Container, Row } from "react-bootstrap";
import React from "react";

function TopCardImage(props) {
  const { headCardImage, topcardText } = props;
  return (
    <Container
      className="spacing"
      fluid
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      <Row>
        <>
          <Card style={{ border: "none", paddingLeft: "0", paddingRight: "0" }}>
            <Card.Img variant="top" src={headCardImage} />
            <Card.Body>
              <Card.Text>{topcardText}</Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      </Row>
    </Container>
  );
}
export { TopCardImage };
