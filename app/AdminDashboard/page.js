// "use client"
// import React, { useLayoutEffect } from "react";
import Admin_Table from "../components/Admin_Table";
import { redirect } from "next/navigation";
const getAllPassenger = async () => {
  const passenger = await fetch("http://localhost:3000/api/passenger");
  return passenger.json();
}
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
