import React from 'react'
import User_Table from '../components/User_Table';
const getAllPassenger = async () => {
  const passenger = await fetch(`${process.env.API_URL}/api/passenger`);
  return passenger.json();
}
const UserDashboard = async () => {
  const passenger = await getAllPassenger();
  return (
    <div>
      <User_Table passenger={passenger}/>
    </div>
  )
}

export default UserDashboard