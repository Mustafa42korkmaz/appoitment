import React, { useState } from 'react'
import { doctorData } from "../helper/data.jsx"
import { appointmentData } from "../helper/data.jsx"
import Doctors from '../components/Doctors.jsx'

const Home = () => {
  
  const [doctors, setDoctors] = useState(doctorData)
  const [appointments, setAppointments] = useState(appointmentData)
  console.log(doctorData)

  return (
    <main className='text-center mt-3'>
      <h1 className='text-danger display-5'>HEALTLY BRİDGE HOSPİTAL</h1>

      <Doctors doctors={doctors} appointments={appointments}/>
    </main>
  ) 
}

export default Home