import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModal from './AddModal';

const Doctors = ({setAppointments, appointments, doctors}) => {

    const [show, setShow] = useState(false)
    const handleClick = (doctorName) => {
        setShow(true)
        setSelecetedDrName(doctorName)
    }
    const [selecetedDrName, setSelecetedDrName] = useState("")
    
  return (
    <Container className='p-2'>
        <h3>Our Doctors</h3>
    <Row>
    {doctors.map((doctor) => (
        <Col key={doctor.id} xs={6} sm={4} md={3}>
            <img src={doctor.img} alt="" onClick={() => handleClick(doctor.name)} width={200}/>
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
            
        </Col>
    ))}
    </Row>

    <AddModal
        show = {show}
        handleClose = {() => setShow(false)}
        doctorName = {selecetedDrName}
        appointments = {appointments}
        setAppointments = {setAppointments}
    />
  </Container>
  )
}

export default Doctors