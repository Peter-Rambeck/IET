import { Container, Row, Col, Table, Card } from "react-bootstrap";

export default function DestSpec({ props }) {
  const destData = props.destData;
  const id = props.id;

  return (
    <>
      <Container>
        <Row className={["spacing", "separator-center"].join(" ")}>
          <h2>
            Rute og <br />
            højdepunkter
            <br />-
          </h2>
        </Row>
        <Row>
          <>
            <Col lg={4}>
              <>
                <Card
                  style={{
                    border: "0",
                  }}
                >
                  <Card.Img
                    variant="bottom"
                    src={props.image}
                    alt={props.alt}
                  />
                  <Card.Body>
                    <Card.Text>{props.cardText}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            </Col>
            <Col lg={true} style={{ lineHeight: "1.5" }}>
              <Table responsive="sm">
                <thead></thead>
                {destData &&
                  destData.map((item) => {
                    if (id === item.id) {
                      return (
                        <tbody key={item.id}>
                          <>
                            {item.content &&
                              item.content.map((nItem) => (
                                <tr
                                  key={nItem.label}
                                  style={{
                                    fontSize: "1rem",
                                    whiteSpace: "pre-wrap", //verticalAlign: "bottom",
                                  }}
                                >
                                  <td
                                    style={{
                                      padding: "1em",
                                    }}
                                  >
                                    {nItem.label}
                                  </td>
                                  <td
                                    style={{
                                      padding: "1em",
                                    }}
                                  >
                                    {nItem.c1}
                                  </td>
                                  <td
                                    style={{
                                      padding: "1em",
                                    }}
                                  >
                                    {nItem.c2}
                                  </td>
                                </tr>
                              ))}
                          </>
                        </tbody>
                      );
                    } else {
                      return null;
                    }
                  })}
              </Table>
            </Col>
          </>
        </Row>
      </Container>
    </>
  );
}
