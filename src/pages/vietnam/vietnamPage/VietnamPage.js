import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../../../images/vietnamPage/Vietnam.jpg";
import PageHeadline from "../../../components/PageHeadline";
import TopBody from "../../../components/TopBody";
import SectionImageLeftWithHorizontalSeparator from "../../../components/SectionImageLeftWithHorizontalSeparator";
import SectionImageRightWithHorizontalSeparator from "../../../components/SectionImageRightWithHorizontalSeparator";
import SectionImageRightNoSeparator from "../../../components/SectionImageRightNoSeparator";
import data from "../../../assets/json/vietnam/VietnamEN.json";

export default function vietnamPage() {
  return (
    <>
      {/* Page headline */}
      <PageHeadline id={"vietnamPage"} data={data} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={heroImage} className="heroImage" />
      </Container>

      {/* Top body */}
      <TopBody id={"vietnamPage"} data={data} />

      <hr />

      {/* First section index [0] */}
      {/* SectionImageLeft */}
      {/* Indochina Map + Indochina text  */}

      <SectionImageLeftWithHorizontalSeparator
        props={{
          image: null,
          cardText: "The heart of Indochina",
          alt: "Indochina Explorers map",
          id: "vietnamPage",
          sectionHeadline: 0,
          sectionTextId: 0,
        }}
        data={data}
      />

      <hr />

      <SectionImageRightWithHorizontalSeparator
        props={{
          image: null,
          cardText: "The heart of Indochina 2",
          alt: "Indochina Explorers map",
          id: "vietnamPage",
          sectionHeadline: 1,
          sectionTextId: 1,
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
                <h4>Section x</h4>
              </div>
            </>
          </Col>
          <Col lg={7}>
            Non ea eiusmod magna in tempor laborum. Laboris aute Lorem deserunt
            exercitation commodo. Ad elit cillum eu cupidatat magna sit nostrud
            ut ullamco excepteur incididunt. Proident anim do magna aliqua
            proident aute esse exercitation proident.
            <br />
            <br />
          </Col>
        </Row>
      </Container>

      <hr />
    </>
  );
}
