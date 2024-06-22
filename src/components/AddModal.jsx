
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddModal({show, handleClose, doctorName, setAppointments, appointments}) {
  

  
  const handleShow = () => setShow(true);
  const [patientName, setPatientName] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments(
      [...appointments, {
        id: appointments +1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: doctorName,
      }]
    )
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter the patient's name"
                autoFocus
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type='datetime-local'
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;