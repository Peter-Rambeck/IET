import { Container, Row, Col } from "react-bootstrap";
import heroImage from "./images/BangkokGrandPalace.jpg";
import PageHeadline from "../../components/PageHeadline";
import TopBody from "../../components/TopBody";
import SectionImageLeftWithHorizontalSeparator from "../../components/SectionImageLeftWithHorizontalSeparator";
import SectionImageRightNoSeparator from "../../components/SectionImageRightNoSeparator";

export default function vietnamPage() {
  const page = "thailandPage";
  return (
    <>
      {/* Page headline */}
      <PageHeadline id={page} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Bangkok Grand Palace" src={heroImage} className="heroImage" />
      </Container>

      {/* Top body */}
      <TopBody id={page} />

      <hr />

      {/* First section index [0] */}
      {/* SectionImageLeft */}
      {/* Indochina Map + Indochina text  */}

      <SectionImageLeftWithHorizontalSeparator
        props={{
          image: null,
          cardText: "The heart of Indochina",
          alt: "Indochina Explorers map",
          id: page,
          sectionHeadline: 0,
          sectionTextId: 0,
        }}
      />

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
      {/* First section index [0] */}
      {/* SectionImageRight - no separator */}
      {/* Indochina Map + Indochina text  */}

      <SectionImageRightNoSeparator
        props={{
          image: null,
          cardText: "The heart of Indochina",
          alt: "Indochina Explorers map",
          id: page,
          sectionHeadline: 1,
          sectionTextId: 1,
        }}
      />

      <hr />
    </>
  );
}
