import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

function ToggleForm({ onSendAppointment, lastId }) {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };

  let [toggleForm, setToggle] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,

      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggle(!toggleForm);
  }

  return (
    <Container>
      <Row className={["spacing", "separator-center"].join(" ")}>
        <Col
          lg={true}
          style={{
            lineHeight: "1.7",
            transitionTimingFunction: "linear",
            transitionDuration: "4s",
          }}
        >
          <button
            onClick={() => {
              setToggle(!toggleForm);
            }}
          >
            <div>
              <BiCalendarPlus className="inline-block align-text-top" /> Add
              Appointment
            </div>
          </button>

          <div
            style={{
              transitionTimingFunction: "linear",
              transitionDuration: "4s",
            }}
          >
            {toggleForm && <p>Gedebuk</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ToggleForm;
