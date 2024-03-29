import { Container, Row, Col, Table, Card } from "react-bootstrap";

export default function DestSpec({ props }) {
  const destData = props.destData;
  const id = props.id;

  return (
    <>
      <Container>
        <Row className={["spacing", "separator-center"].join(" ")}>
          <h2 className="center">
            Turen i <br />
            overblik
          </h2>
          <p className={["center"].join(" ")}>
            - <br />7 dage / 6 nætter
            <br />2 cykledage <br />-
          </p>
          <>
            <Col lg={true} style={{ lineHeight: "1.5" }}>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Dage</th>
                  </tr>
                </thead>
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
                                    <br />
                                    {nItem.labelContent}
                                  </td>
                                  <td
                                    style={{
                                      padding: "1em",
                                    }}
                                  >
                                    2
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
          <Col lg={4}>
            <>
              <Card
                style={{
                  border: "0",
                }}
              >
                <Card.Img variant="bottom" src={props.image} alt={props.alt} />
                <Card.Body>
                  <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
}
