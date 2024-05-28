import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModal from './AddModal';
import appointmentİmg from "../../public/img/appointment.jpg"

const Doctors = ({appointments, doctors}) => {

    const [show, setShow] = useState(false)
    const [selectedDrName, setSelectedDrName] = useState("")

    const handleClick = (doctorName) => {
        setShow(true)
        setSelectedDrName(doctorName)
    }

  return (
    <Container className='p-2'>
        <h3>Our Doctors</h3>
      <Row>
        {doctors.map((doctor) => (
            <Col key={doctor.id} xs={6} sm={4} md={3} >
                <img src={doctor.img} alt="" width="250px" onClick={() => handleClick(doctor.name)}/>    
                <h5>{doctor.name}</h5>
                <h6>{doctor.dep}</h6>
            </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        doctorName={selectedDrName}
      />
      <img src={appointmentİmg} alt="" width="600px"/>
    </Container>
  )
}

export default Doctors