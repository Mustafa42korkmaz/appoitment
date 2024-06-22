import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDelete } from "react-icons/md";

const AppointmentList = ({setAppointments, appointments}) => {
  const handleDoubleClick = (id) => {
    console.log("tıklandı", id)

    setAppointments(
      appointments.map((item) => item.id === id ? {...item, consulted : !item.consulted} : item)
    )
  }
  const handleDelete = () => {
    setAppointments(appointments.filter((item) => item.id !==id ))
  }
  return (
    <Container>
        <h3>Appointment List</h3>
        <div>  
          {!appointments.length && (<img src="./img/appointment.jpg" alt="" width={400}/>) }
        {appointments.map((booking) => {
          const {id, doctor, day, patient, consulted} = booking
          return(
            <div 
              key={id} 
              onDoubleClick={() => handleDoubleClick(id)}
              className={consulted ? "appointments consulted" : "appointments" }
            >
              <Row>
                <Col>
                  <h4>{patient}</h4>
                  <h5>{doctor}</h5>
                </Col>
                <Col>
                  <h4>Date: {new Date(day).toLocaleDateString() }</h4>
                  <h5>Time: {new Date(day).toLocaleTimeString() }</h5>
                </Col>
                <Col>
                <MdDelete fontSize={50} onClick={() => handleDelete(id)}/>
                </Col>
              </Row>
            </div>
          )
        })}
        </div>
    </Container>
  )
}

export default AppointmentList