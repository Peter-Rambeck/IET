import { Container, Row, Col } from "react-bootstrap";
//import homePageData from "../../assets/json/homePage/HomePageDK.json";
import heroImage from "../../images/homePage/heroImage.jpg";
import TH_Northern_Delights from "../../images/homePage/TH_Northern_Delights.jpg";
import Indochina_Map from "../../images/homePage/Indochina_Map.png";
import PageHeadline from "../../components/PageHeadline";
import SubHeadLineWithText from "../../components/SubHeadLineWithText";
import SectionImageLeftWithHorizontalSeparator from "../../components/SectionImageLeftWithHorizontalSeparator";
import SectionImageRightNoSeparator from "../../components/SectionImageRightNoSeparator";
import data from "../../assets/json/homePage/HomePageDK.json";

export default function homePage() {
  const page = "homePage";
  return (
    <>
      {/* Page headline */}
      <PageHeadline id={page} data={data} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img
          alt="Beach wedding"
          src={heroImage}
          //data={data}
          className="heroImage"
        />
      </Container>

      {/* Top body */}
      <SubHeadLineWithText
        props={{
          image: "",
          cardText: "",
          alt: "",
          id: page,
          subHeadline: 0,
          subText: 0,
          textAlign: "",
        }}
        data={data}
      />

      <hr />

      {/* First section index [0] */}
      {/* SectionImageLeft */}
      {/* Indochina Map + Indochina text  */}

      <SectionImageLeftWithHorizontalSeparator
        props={{
          image: Indochina_Map,
          cardText: "The heart of Indochina",
          alt: "Indochina Explorers map",
          id: page,
          sectionHeadline: 0,
          sectionTextId: 0,
        }}
        data={data}
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
          id: page,
          sectionHeadline: 1,
          sectionTextId: 1,
          image: TH_Northern_Delights,
          cardText: "Northern Delights",
          alt: "Northern Thailand",
        }}
        data={data}
      />

      <hr />
    </>
  );
}

export { data };
