import React from 'react'
import User_Table from '../components/User_Table';
const getAllPassenger = async () => {
  try {
      const response = await fetch(`${process.env.API_URL}/api/passenger`);

      // Check if the HTTP request was successful (status code in the range 200-299)
      if (!response.ok) {
          throw new Error(`Failed to fetch passengers. Status: ${response.status}`);
      }

      const passengers = await response.json();
      return passengers;
  } catch (error) {
      console.error('Error fetching passengers:', error.message);
      // Handle the error (e.g., show a user-friendly message or rethrow the error)
      throw error;
  }
};
const UserDashboard = async () => {
  const passenger = await getAllPassenger();
  return (
    <div>
      <User_Table passenger={passenger}/>
    </div>
  )
}

export default UserDashboard