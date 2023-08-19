import { Container, Row, Card, Col } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function InjectText({ props, data }) {
  return (
    <>
      <Container>
        <Row className="spacing">
          <Col lg={true}>
            {data &&
              data.map((item) => {
                if (props.id === item.id) {
                  return (
                    item.sectionText && (
                      <p
                        className={["top-body-padding"].join(" ")}
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

export default InjectText;
