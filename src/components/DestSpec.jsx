import { Container, Row, Col, Table } from "react-bootstrap";

export default function DestSpec({ props }) {
  const destData = props.destData;
  const id = props.id;

  return (
    <>
      <Container>
        <Row className={["spacing", "separator-center"].join(" ")}>
          <h3 className={["center"].join(" ")}>Turen i overblik</h3>
          <p className={["center"].join(" ")}>
            - <br />7 dage / 6 nætter
            <br />2 cykledage <br />-
          </p>

          <Col lg={true} style={{ lineHeight: "1.5" }}>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Dage</th>
                </tr>
              </thead>

              <tbody>
                <>
                  {destData &&
                    destData.map((item) => {
                      if (id === item.id) {
                        return (
                          <>
                            {item.content.map((nItem) => (
                              <tr
                                key={item.id}
                                style={{
                                  fontSize: "1rem",
                                  whiteSpace: "pre-wrap",
                                  //verticalAlign: "bottom",
                                }}
                              >
                                <td
                                  key={nItem.label}
                                  style={{
                                    paddingTop: "2em",
                                    paddingBottom: "2em",
                                  }}
                                >
                                  {nItem.label}
                                  <br />
                                  -
                                  <br />
                                  {nItem.labelContent}
                                </td>
                                <td
                                  style={{
                                    paddingTop: "2em",
                                    paddingBottom: "2em",
                                  }}
                                >
                                  2
                                </td>
                              </tr>
                            ))}
                          </>
                        );
                      } else {
                        return null;
                      }
                    })}{" "}
                </>
              </tbody>
            </Table>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

/* Original before Table
   <Container>
        <Row className={["spacing", "separator-center"].join(" ")}>
          <Col lg={true} style={{ lineHeight: "1.7" }}>
            <>
              {destData &&
                destData.map((item) => {
                  if (props.id === item.id) {
                    return (
                      <div key={item.id}>
                        {item.content.map((nItem) => (
                          <div key={nItem.label}>
                            <p
                              // adds \n newline to rendering
                              style={{
                                whiteSpace: "pre-wrap",
                                verticalAlign: "bottom",
                              }}
                            >
                              {nItem.label}
                              <br />
                              {nItem.labelContent}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </>
          </Col>
        </Row>
      </Container>

      */
