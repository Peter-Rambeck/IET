import { Container, Card } from "react-bootstrap";
// Images
import TonkinBugten from "./images/tonkinBugten.jpg";
import TonkinBadge from "./images/tonkinBadge.svg";
import TonkinDiscoveryMap from "./images/mapTonkinDiscovery.png";
import TonkinDiscoveryTemple from "./images/tonkinDiscoveryTemple.jpg";
import HalongBay from "./images/halongBayParralax.jpg";
// Components
import TopBody2 from "../../../components/TopBody2";
import Toggle from "../../../components/Toggle";
import TopBodyBadge from "../../../components/TopBodyBadge";
import DestSpec from "../../../components/DestSpec";
import DestHighlightsWithImageLeft from "../../../components/DestHighlightsWithImageLeft";
//import ToggleForm from "../../../components/ToggleForm";
import SubNav from "../../../components/SubNav";
import PageHeadline from "../../../components/PageHeadline";
// Data
import TonkinExplorerData from "./data/tonkinExplorerData.json";
import DestSpecObject from "./data/DestSpecObject.json";
import DestToggleObject from "./data/DestToggleObject.json";
import DestRouteHighlightsObject from "./data/DestRouteHighlightsObject.json";

export default function TonkinExplorer() {
  const page = "tonkinExplorerPage";

  return (
    <>
      {/* component */}
      <PageHeadline props={{ id: page, data: TonkinExplorerData }} />

      {/* Head image */}
      <Container fluid className="heroImage-container">
        <img alt="Beach wedding" src={TonkinBugten} className="heroImage" />
      </Container>

      <SubNav />
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
      <DestSpec
        props={{
          id: page,
          destData: DestSpecObject,
          image: TonkinDiscoveryMap,
          alt: "Rejse rute Tonkin Explorer",
          cardText: "Rejserute",
        }}
      />

      <Container>
        <hr />
      </Container>

      <Container fluid>
        <Card
          style={{
            border: "0",
          }}
        >
          <Card.Img src={HalongBay} alt="Rock" />
          <Card.Body>
            <Card.Text>Rock n Loll</Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <hr />
      </Container>

      {/* Destination route and highlights */}
      <DestHighlightsWithImageLeft
        props={{
          id: page,
          destData: DestRouteHighlightsObject,
          image: TonkinDiscoveryTemple,
          alt: "Tam Coc tempel",
          cardText: "Tam Coc tempel",
        }}
      />

      <Container>
        <hr />
      </Container>

      <Toggle props={{ data: DestToggleObject }} />
      <hr />
    </>
  );
}
