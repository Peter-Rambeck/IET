import { Container, Row, Col, Card } from "react-bootstrap";
import TonkinBugten from "./images/tonkinBugten.jpg";
import TonkinBadge from "./images/tonkinBadge.svg";
import Headline from "../../components/Headline";
import TopBody from "../../components/TopBody";

import "../../css/heroImage.css";

export default function homePage() {
  return (
    <>
      {/* component */}
      <Headline id={2} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={TonkinBugten} className="heroImage" />
      </Container>

      {/* Top body */}
      <Container>
        <Row className="spacing">
          <Col lg={true}>
            <TopBody id={2} />
          </Col>
        </Row>
      </Container>
      {/* End - Top body */}

      {/* Badge */}
      <Container>
        <hr />
        <Row className="spacing">
          <img
            alt="Tonking Explorer"
            src={TonkinBadge}
            width="150px"
            height="150px"
          />
        </Row>
        <hr />
      </Container>
      {/* End - Badge */}

      {/* test design */}
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
