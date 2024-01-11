// "use client"
// import React, { useLayoutEffect } from "react";
import Admin_Table from "../components/Admin_Table";
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
const AdminDashboard = async () => {
  const passenger = await getAllPassenger(); 
  // useLayoutEffect(()=>{
  //   const storedUserData = localStorage.getItem('user');
  //   const user = storedUserData ? JSON.parse(storedUserData) : null; 
  //   if(!user){
  //     redirect("/")
  //   }
  // },[]);
  
 
  return (
    <div className="m-4 shadow-lg mx-auto w-full">
      <Admin_Table passenger={passenger}/>
    </div>
  );
};

export default AdminDashboard;
