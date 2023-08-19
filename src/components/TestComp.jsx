import { Container, Row, Card, Col } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function TestComp({ props, data }) {
  return (
    <>
      <Container>
        <Row className={["spacing", "separator"].join(" ")}>
          <Col
            lg={4}
            className="separator-item-item-start"
            style={{ lineHeight: "1.7" }}
          >
            {data &&
              data.map((item) => {
                if (props.id === item.id) {
                  return (
                    item.sectionHeadline &&
                    item.sectionText && (
                      <div key={item.id}>
                        <div
                          style={{ textAlign: "right" }}
                          className={["h3"].join(" ")}
                          dangerouslySetInnerHTML={{
                            __html: item.sectionHeadline[props.sectionHeadline],
                          }}
                        ></div>
                      </div>
                    )
                  );
                } else {
                  return null;
                }
              })}
          </Col>
          <Col lg={7}>
            {data &&
              data.map((item) => {
                if (props.id === item.id) {
                  return (
                    item.sectionHeadline &&
                    item.sectionText && (
                      <p
                        className={[].join(" ")}
                        style={{
                          whiteSpace: "pre-wrap",
                          verticalAlign: "bottom",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.sectionText[props.sectionText],
                        }}
                      ></p>
                    )
                  );
                } else {
                  return null;
                }
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TestComp;
