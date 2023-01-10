import { Container, Row, Col, Card } from "react-bootstrap";
import TonkinBugten from "./images/tonkinBugten.jpg";
import TonkinBadge from "./images/tonkinBadge.svg";
import TopBody2 from "../../../components/TopBody2";
//import "../../css/heroImage.css";
import PageHeadline2 from "../../../components/PageHeadline2";
import TonkinExplorerData from "./data/tonkinExplorerData.json";
import DestSpecObject from "./data/DestSpecObject.json";

import TopBodyBadge from "../../../components/TopBodyBadge";
import DestSpec from "../../../components/DestSpec";
//import "../../css/heroImage.css";
import ToggleForm from "../../../components/ToggleForm";

export default function TonkinExplorer() {
  const page = "tonkinExplorerPage";

  return (
    <>
      {/* component */}
      <PageHeadline2 props={{ id: page, data: TonkinExplorerData }} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={TonkinBugten} className="heroImage" />
      </Container>

      {/* Icon component */}
      <TopBodyBadge
        props={{
          id: page,
          badge: TonkinBadge,
          alt: "Tonkin Explorer",
          cardText: "Den lækre Tonkinbugt",
        }}
      />

      {/* Top body */}
      <TopBody2 props={{ id: page, data: TonkinExplorerData }} />
      <Container>
        <hr />
      </Container>

      {/* Destination specifications */}
      <DestSpec props={{ id: page, destData: DestSpecObject }} />
      <Container>
        <hr />
      </Container>

      <ToggleForm />
      <hr />
    </>
  );
}
