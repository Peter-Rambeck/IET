import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
// import { Text2 } from "../../components/TonkinExplorersTexts";

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

export default function Toggle() {
  const x = tabs.length;
  console.log("x: " + x);

  let first = tabs.slice(0, Math.round(tabs.length / 2));
  let firstCalc = first.length - tabs.length - -tabs.length;
  let second = tabs.slice(firstCalc, tabs.length);
  console.log("first: " + first);
  console.log("firstCalc: " + firstCalc);
  console.log("second: " + second);

  return (
    <Container className="spacing">
      <Row>
        <>
          <Col md={6}>
            {first && (
              <Accordion>
                <>
                  {first.map((item) => (
                    <Accordion.Item eventKey={item.label}>
                      <Accordion.Header>{item.label}</Accordion.Header>
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
                    <Accordion.Item eventKey={item.label}>
                      <Accordion.Header>{item.label}</Accordion.Header>
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
