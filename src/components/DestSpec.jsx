import { Container, Row, Col, Card } from "react-bootstrap";

export default function DestSpec({ props }) {
  const destData = props.destData;
  const id = props.id;

  return (
    <>
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
    </>
  );
}

/*
  <Container>
        <Row className={["spacing", "separator", "separator-center"].join(" ")}>
          <Col
            lg={true}
            //className="d-flex justify-content-center align-items-center separator-item-item-end"
            style={{ lineHeight: "1.7" }}
          >
            <>
              {data &&
                data.map((item) => {
                  if (id === item.id) {
                    return (
                      <div key={item.id}>
                        <h4>{item.sectionHeadline[props.sectionHeadline]}</h4>
                        <p
                          // adds \n newline to rendering
                          style={{
                            whiteSpace: "pre-wrap",
                            verticalAlign: "bottom",
                          }}
                        >
                          {item.sectionText[props.sectionTextId]}
                        </p>
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
