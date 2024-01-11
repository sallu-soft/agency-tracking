import React from 'react'
import User_Table from '../components/User_Table';
const getAllPassenger = async () => {
  try {
      const response = await fetch(`${process.env.API_URL}/api/passenger`);

      if (!response.ok) {
          if (response.status === 404) {
              // Handle 404 error, for example, by returning an empty array or showing a user-friendly message.
              return [];
          }

          throw new Error(`Failed to fetch passengers. Status: ${response.status}`);
      }

      const passengers = await response.json();
      return passengers;
  } catch (error) {
      console.error('Error fetching passengers:', error.message);
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