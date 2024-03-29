import { Container, Row, Card, Col } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function SectionImageLeftWithHorizontalSeparator({ props, data }) {
  return (
    <>
      <Container>
        <Row className={["spacing", "separator", "separator-center"].join(" ")}>
          <Col
            className="separator-item-item-start" // d-flex
            lg={true}
          >
            <>
              <Card
                style={{
                  border: "0",
                }}
              >
                <Card.Img
                  variant="top"
                  src={props.image}
                  alt={props.alt}
                  style={{
                    width: "50%",
                    height: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
              </Card>
            </>
          </Col>

          <Col
            lg={true}
            //className="d-flex justify-content-center align-items-center separator-item-item-end"
            style={{ lineHeight: "1.7" }}
          >
            <>
              {data &&
                data.map((item) => {
                  if (props.id === item.id) {
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
    </>
  );
}

export default SectionImageLeftWithHorizontalSeparator;
