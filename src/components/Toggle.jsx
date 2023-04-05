import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
// import { Text2 } from "../../components/TonkinExplorersTexts";

/*
const tabs = [
  {
    label: "Dag 1",
    content: "Flyrejse fra København med mellemlanding.",
  },
  {
    label: "Tab 2",
    content: "",
  },
  {
    label: "Tab 3",
    content: "Shitty content 3",
  },
  {
    label: "Tab 4",
    content: "Shitty content 4",
  },
  {
    label: "Tab 5",
    content: "Shitty content 5",
  },
];
*/

export default function Toggle({ props }) {
  const tabs = props.data;
  let first = tabs.slice(0, Math.round(tabs.length / 2));
  let firstCalc = first.length - tabs.length - -tabs.length;
  let second = tabs.slice(firstCalc, tabs.length);

  return (
    <Container>
      <Row className={["spacing", "separator-center"].join(" ")}>
        <h2>
          Dag for dag <br />
          program
          <br />-
        </h2>
      </Row>
      <Row>
        <>
          <Col md={6}>
            {first && (
              <Accordion>
                <>
                  {first.map((item) => (
                    <Accordion.Item
                      key={item.id}
                      eventKey={item.label}
                      style={{
                        fontSize: "1rem",
                        whiteSpace: "pre-wrap", //verticalAlign: "bottom",
                      }}
                    >
                      <Accordion.Button style={{}}>
                        {item.label}
                      </Accordion.Button>
                      <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </>
              </Accordion>
            )}
          </Col>
          <Col md={6}>
            {second && (
              <Accordion>
                <>
                  {second.map((item) => (
                    <Accordion.Item
                      key={item.label}
                      eventKey={item.label}
                      style={{
                        fontSize: "1rem",
                        whiteSpace: "pre-wrap", //verticalAlign: "bottom",
                      }}
                    >
                      <Accordion.Button>{item.label}</Accordion.Button>
                      <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </>
              </Accordion>
            )}
          </Col>
        </>
      </Row>
    </Container>
  );
}
