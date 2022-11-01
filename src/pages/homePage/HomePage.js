import { Container, Row, Col, Card } from "react-bootstrap";
import heroImage from "./images/heroImage.jpg";
import Indochina_Map from "./images/Indochina_Map.png";
import TH_Northern_Delights from "./images/TH_Northern_Delights.jpg";
import Headline from "../../components/Headline";
import TopBody from "../../components/TopBody";

import "../../css/heroImage.css";

export default function homePage() {
  return (
    <>
      {/* Page headline */}
      <Headline id={1} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={heroImage} className="heroImage" />
      </Container>

      {/* Top body */}
      <Container>
        <Row className="spacing">
          <Col lg={true}>
            <TopBody id={1} />
          </Col>
        </Row>
      </Container>

      <hr />

      {/* First section  */}
      {/* Indochina Map + Indochina text  */}
      <Container>
        <Row className={["spacing", "separator", "separator-center"].join(" ")}>
          <Col
            className="separator-item-item-start" // d-flex
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
                  src={Indochina_Map}
                  alt="Indochina Explorers map"
                  style={{
                    width: "50%",
                    height: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Text>The heart of Indochina</Card.Text>
                </Card.Body>
              </Card>
            </>
          </Col>

          <Col
            lg={true}
            //className="d-flex justify-content-center align-items-center separator-item-item-end"
            style={{ lineHeight: "1.7" }}
          >
            <>
              <div>
                <h4>Northen Delights</h4>
                <p>
                  {" "}
                  Northen Delights Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias aut, repellat ipsum facere
                  voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </p>
              </div>
            </>
          </Col>
        </Row>
      </Container>

      <hr />

      {/* Breaker section  */}
      {/* test design - Hvem er vi */}
      <Container>
        <Row className={["spacing", "separator"].join(" ")}>
          <Col
            lg={4}
            className="separator-item-item-start"
            style={{ lineHeight: "1.7" }}
          >
            <>
              <div style={{ textAlign: "right" }}>
                <h4>Hvem er vi?</h4>
              </div>
            </>
          </Col>
          <Col lg={7}>
            Om du vælger at tage oplevelserne helt tæt på cyklende på mountain
            bike gennem landskabet og lokale landsbyer eller hoppe på hovedet,
            har vi været der.
            <br />
            <br />
            Med 20 år som Indokina boende og leverandør til skandinaviske og
            alverdens rejsende har vi trådt på hver en støvet sti, besøgt alle
            kroge, dyppet tærende i det klare blå vand fra alle sandstrande og
            udforsket alt for at på første hånd kan opfylde din specielle
            rejse-drøm
          </Col>
        </Row>
      </Container>

      <hr />

      {/* Product section  */}
      <Container>
        <Row className="spacing">
          <Col
            lg={true}
            className="d-flex justify-content-center align-items-center"
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
    </>
  );
}

/* Card with hero picture from earlier
<Row>
  <>
    <Card style={{ border: "none", paddingLeft: "0", paddingRight: "0" }}>
      <Card.Img variant="top" src={Wedding} />
        <Card.Body>
          <Card.Text>
            Explore the charm and wonders of South East Asia
          </Card.Text>
        </Card.Body>
    </Card>
    <br />
  </>
</Row>




        <Container
          fluid
          style={{ paddingLeft: "0", paddingRight: "0" }}
          className="heroPix"
        >
          <img
            alt="wedding"
            src={Wedding}
            width="100%"
            height="auto"
            className="d-inline-block align-top"
          />
        </Container>

*/
