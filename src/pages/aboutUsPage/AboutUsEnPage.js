import { Container } from "react-bootstrap";
import heroImage from "../../images/homePage/heroImage.jpg";
import TH_Northern_Delights from "../../images/homePage/TH_Northern_Delights.jpg";
import Indochina_Map from "../../images/homePage/Indochina_Map.png";
import PageHeadline from "../../components/PageHeadline";
import SubHeadLineWithText from "../../components/SubHeadLineWithText";
import SectionImageRightNoSeparator from "../../components/SectionImageRightNoSeparator";
import TestCompImageLightWithHorizontalSeperator from "../../components/TestCompImageLightWithHorizontalSeperator";
import TestComp from "../../components/TestComp";
import InjectText from "../../components/InjectText";

import data from "../../assets/json/aboutUs/AboutUsEN.json";

export default function aboutUsEnPage() {
  const page = "aboutUsEn";
  return (
    <>
      {/* Page headline */}
      <PageHeadline id={page} data={data} />
      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={heroImage} className="heroImage" />
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
          textAlign: "center",
        }}
        data={data}
      />

      <hr />

      {/* Breaker section  */}
      {/* test design - Hvem er vi */}
      <TestComp
        props={{
          image: "",
          cardText: "",
          alt: "",
          id: page,
          sectionHeadline: 0,
          sectionText: 0,
          textAlign: "Center",
        }}
        data={data}
      />
      <hr />
      {/* First section index [0] */}
      {/* SectionImageLeft */}
      {/* Indochina Map + Indochina text  */}
      <TestCompImageLightWithHorizontalSeperator
        props={{
          image: Indochina_Map,
          cardText: "Template text",
          alt: "template",
          id: page,
          sectionHeadline: 1,
          sectionText: 1,
          textAlign: "center",
        }}
        data={data}
      />

      <hr />

      {/* Breaker section  */}
      {/* test design - Hvem er vi */}
      <TestComp
        props={{
          image: "",
          cardText: "",
          alt: "",
          id: page,
          sectionHeadline: 2,
          sectionText: 2,
          textAlign: "",
        }}
        data={data}
      />
      <hr />
      {/* Breaker section  */}
      {/* test design - Hvem er vi */}
      <TestComp
        props={{
          image: "",
          cardText: "",
          alt: "",
          id: page,
          sectionHeadline: 3,
          sectionText: 3,
          textAlign: "",
        }}
        data={data}
      />
      <hr />
      {/* Breaker section  */}
      {/* test design - Hvem er vi */}
      <TestComp
        props={{
          image: "",
          cardText: "",
          alt: "",
          id: page,
          sectionHeadline: 4,
          sectionText: 4,
          textAlign: "",
        }}
        data={data}
      />
      <hr />
    </>
  );
}
