import { Container, Row, Col } from "react-bootstrap";
//import data from "../assets/json/allData.json";

function TopBody({ id, data }) {
  return (
    <>
      <Container>
        <Row className="spacing">
          <Col lg={true}>
            {data &&
              data.map((item) => {
                if (id === item.id) {
                  return (
                    item.subHeadline &&
                    item.subText && (
                      <div key={item.id}>
                        {/*<h3 className={["spacing", "center"].join(" ")}>
                          {item.subHeadline}
                        </h3>*/}
                        <div
                          className={[
                            "h3",
                            "subHeadline",
                            "spacing",
                            "center",
                          ].join(" ")}
                        >
                          {item.subHeadline}
                        </div>
                        <p
                          className={[
                            "",
                            "top-body-padding",
                            "center",
                            "props.textAlign",
                          ].join(" ")}
                          // adds \n newline to rendering
                          style={{
                            whiteSpace: "pre-wrap",
                            verticalAlign: "bottom",
                          }}
                        >
                          {item.subText}
                        </p>
                      </div>
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

export default TopBody;

/*{data &&
          data.map((item, key) => {
            return (
              <>
                <div key={item.id}>
                  {key}
                  <div>
                 
                    {item.isVisible ? (
                      <>
                        <h3 className={["spacing", "center"].join(" ")}>
                          {item.subHeadline}
                        </h3>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {item.isVisible ? (
                      <>
                        {" "}
                        <p
                          style={{
                            whiteSpace: "pre-wrap",
                            verticalAlign: "bottom",
                          }}
                        >
                          {item.subText}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
          */
