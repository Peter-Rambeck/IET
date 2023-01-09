import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../pages/allData.json";

// Add separator .. className="separator", //

export default function SectionImageRightNoSeparator({ props }) {
  return (
    <>
      <Container>
        <Row className={["spacing", "separator-center"].join(" ")}>
          <Col lg={true} style={{ lineHeight: "1.7" }}>
            <>
              {data &&
                data.map((item) => {
                  if (props.id === item.id) {
                    return (
                      <div key={item.id}>
                        <h4>{item.sectionHeadline[props.sectionTextId]}</h4>
                        <p
                          // adds \n newline to rendering
                          style={{
                            whiteSpace: "pre-wrap",
                            verticalAlign: "bottom",
                          }}
                        >
                          {item.sectionText[props.sectionTextId]}
                        </p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </>
          </Col>
          <Col lg={true}>
            <>
              <Card
                style={{
                  border: "0",
                }}
              >
                <Card.Img variant="top" src={props.image} alt={props.alt} />
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

/*
 <Container>
        <Row className={["spacing", "separator", "separator-center"].join(" ")}>
          <Col
            lg={true}
            className="separator-item-item-start"
            style={{ lineHeight: "1.7" }}
          >
            <>
              <div>
                <h4>Northen Delights</h4>
                Northen Delights Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias aut, repellat ipsum facere voluptate
                dicta obcaecati deserunt nobis suscipit eaque?
              </div>
            </>
          </Col>
          <Col lg={true}>
            <>
              <Card
                style={{
                  border: "0",
                }}
              >
                <Card.Img variant="top" src={TH_Northern_Delights} />
                <Card.Body>
                  <Card.Text>
                    Explore the charm and wonders of South East Asia
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
      </Container>
      */
