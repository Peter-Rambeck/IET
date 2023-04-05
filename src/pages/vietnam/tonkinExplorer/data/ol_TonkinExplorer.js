import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import headCardImage from "../../Images/tonkinBugten.jpg";
import {
  TagLine,
  Text,
  TableOverView,
  TableRouteHighlights,
} from "../../components/TonkinExplorersText.jsx";
import Toggle from "../../components/Toggle";
import { TopCardImage } from "../../components/TopCardImage";

import Indochina_Map from "../../Images/Indochina_Map.png";
import { Toggler } from "../../components/TonkinExplorersToggle";

export default function TonkinExplorer() {
  /*
  const initial = {
    id: '',
    package: '',
    headline: 'Lort',
    maineText: ''
  }

  const [text, setText] = useState([initial]);

  const fetchData = useCallback(() => {
    fetch("../../Images/text.json")
    .then(response => response.json())
    .then(data => {
      setText(data)
    })
  }, [])

  useEffect(() => {
    fetchData()
  },[fetchData])
  */

  const topcardText = "I'm a rock text";

  return (
    <Container fluid>
      <TopCardImage headCardImage={headCardImage} topcardText={topcardText} />

      <hr />

      <Container className="spacing">
        <Row>
          <Col
            lg={true}
            className="d-flex justify-content-center align-items-center"
            style={{ lineHeight: "1.7" }}
          >
            <>
              <div>
                <h3
                  className="d-flex justify-content-center align-items-center"
                  style={{ paddingBottom: "2rem" }}
                >
                  <TagLine />
                </h3>

                <Text />
              </div>
            </>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container className="spacing">
        <Row>
          <h4 className="spacing d-flex justify-content-center align-items-center">
            TUREN I OVERBLIK
          </h4>
          <br />
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8}>
            <div className="d-flex" style={{ paddingBottom: "2rem" }}>
              7 dage / 6 nætter
              <br />
              2 Cykledage
              <br />
              HANOI - NINH BINH - HALONG BUGTEN
              <br />
            </div>

            <>
              <div>
                <TableOverView />
              </div>
            </>
          </Col>
          <Col md={4}>
            <Card
              style={{
                border: "0",
              }}
            >
              <Card.Img
                variant="top"
                src={Indochina_Map}
                alt="Indochina Explorers logo"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <Card.Body>
                <Card.Text>The heart of Indochina</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container className="spacing">
        <Row>
          <h4 className="spacing d-flex justify-content-center align-items-center">
            RUTE OG HØJDEPPUNKTER
          </h4>
          <br />
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4}>
            <Card
              style={{
                border: "0",
              }}
            >
              <Card.Img
                variant="top"
                src={Indochina_Map}
                alt="Indochina Explorers logo"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <Card.Body>
                <Card.Text>The heart of Indochina</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <>
              <div>
                <TableRouteHighlights />
              </div>
            </>
          </Col>
        </Row>
      </Container>

      <hr />

      <Toggle />

      <hr />
    </Container>
  );
}
