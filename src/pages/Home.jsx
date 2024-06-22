import React, { useState } from 'react'
import {doctorData} from "../helper/data.jsx"
import {appointmentData} from "../helper/data.jsx"
import Doctors from '../components/Doctors.jsx'
import AppointmentList from '../components/AppointmentList.jsx'


const Home = () => {
    
    const [doctors, setDoctors] = useState(doctorData)
    const [appointments, setAppointments] = useState(appointmentData)
    
  return (
    <main className='text-center'>
        <h1 className='text-danger display-5'>HEALTY HOSPİTAL</h1>

    <Doctors 
        doctors = {doctors}
        appointments = {appointments}
        setAppointments = {setAppointments}
    />
    <AppointmentList
      appointments = {appointments}
      setAppointments = {setAppointments}
    />

    </main>

  )

}

export default Home