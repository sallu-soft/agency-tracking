import React from 'react'
import Navbar from '../components/Navbar'

const getAllPassenger = async () => {
  const passenger = await fetch("http://localhost:3000/api/passenger");
  return passenger.json();
}
const AdminLayout = ({children}) => {
  const passenger = getAllPassenger();
  
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default AdminLayout