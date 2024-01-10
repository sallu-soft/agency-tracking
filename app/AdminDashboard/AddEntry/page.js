"use client"
import TextAreaInput from '@/app/components/TextAreaInput';
import TextInput from '@/app/components/TextInput'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';

const AddEntry = () => {
  const [users, setUsers] = useState([]);
  const [passenger,setPassenger] = useState({
    name:"",
    passport_no:"",
    gender:"",
    country:"",
    medical:"",
    mofa:"",
    bio_finger:"",
    pc_no:"",
    visa_no:"",
    id_no:"",
    training:"",
    bmet_finger:"",
    visa_stamping_date:"",
    manpower:"",
    delivery:"",
    payment:"",
    remark:"",
    agent:"",
    status:"",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // assuming data is an array of users
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    };

    fetchData();
  }, []); 
  
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,
      passport_no,
      gender,
      country,
      medical,
      mofa,
      bio_finger,
      pc_no,
      visa_no,
      id_no,
      training,
      bmet_finger,
      visa_stamping_date,
      manpower,
      delivery,
      payment,
      remark,
      agent,
      status
    } = passenger;
    

    try {
      const res = await fetch("http://localhost:3000/api/passenger", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({name,
          passport_no,
          gender,
          country,
          medical,
          mofa,
          bio_finger,
          pc_no,
          visa_no,
          id_no,
          training,
          bmet_finger,
          visa_stamping_date,
          manpower,
          delivery,
          payment,
          remark,
          agent,
          status
        }),
      });
      
      if (res.ok) {
        router.push("/AdminDashboard");
        alert("Successfully Created Your New Passenger")
        router.refresh();
      } else {
        throw new Error("Failed to create a Passenger");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
<div className="min-w-screen min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-5/6 rounded-xl bg-gray-800 shadow-lg mr-3">
            <div className="flex flex-col">
                <div id="header" className="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                    <div className="text-center uppercase text-2xl">Passenger Information Entry</div>
                    
                </div>

                <div className="px-4">
  <form className="min-w-lg mx-auto" onSubmit={handleSubmit}>
  <div className="m-4 w-[50%] mx-auto">
  <label className="block text-white">Agent</label>
  <select
    value={passenger.agent}
    name="agent"
    id="agent"
    className="form-input mt-1 block w-full p-2 text-black"
    onChange={(e) => {setPassenger({...passenger, agent: e.target.value})}}
    required
  >
    <option value="" disabled>Select Agent</option>
    {users.map(user => <option key={user._id} value={user.name}>{user.name}</option>)}
    
  </select>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
      <TextInput name="name" id="name" type="text" placeholder="Type Name" lebel="Name" value={passenger.name} handleChange={(e)=>{setPassenger({...passenger,name:e.target.value});console.log(passenger)}} />

      <TextInput name="passport_no" id="passport_no" type="text" placeholder="Type Passport No" lebel="Passport No" value={passenger.passport_no} handleChange={(e)=>{setPassenger({...passenger,passport_no:e.target.value});console.log(passenger)}} />

      <TextInput name="gender" id="gender" type="text" placeholder="Type Gender" lebel="Gender" value={passenger.gender} handleChange={(e)=>{setPassenger({...passenger,gender:e.target.value});console.log(passenger)}} />

      <TextInput name="country" id="country" type="text" placeholder="Type Country" lebel="Country" value={passenger.country} handleChange={(e)=>{setPassenger({...passenger,country:e.target.value});console.log(passenger)}} />



      <TextAreaInput name="medical" id="medical" placeholder="Medical Name, Issue and Expire Date" lebel="Medical Information" value={passenger.medical} handleChange={(e)=>{setPassenger({...passenger,medical:e.target.value});console.log(passenger)}} />

      <TextInput name="mofa" id="mofa" type="text" placeholder="Type Mofa" lebel="Mofa" value={passenger.mofa} handleChange={(e)=>{setPassenger({...passenger,mofa:e.target.value});console.log(passenger)}} />

      <TextInput name="bio_finger" id="bio_finger" type="text" placeholder="Type Biometrics Finger" lebel="Biometrics Finger" value={passenger.bio_finger} handleChange={(e)=>{setPassenger({...passenger,bio_finger:e.target.value});console.log(passenger)}} />

      <TextInput name="pc_no" id="pc_no" type="text" placeholder="Type Police Clearence" lebel="Police Clearence" value={passenger.pc_no} handleChange={(e)=>{setPassenger({...passenger,pc_no:e.target.value});console.log(passenger)}} />



      <TextInput name="visa_no" id="visa_no" type="text" placeholder="Visa No" lebel="Visa No" value={passenger.visa_no} handleChange={(e)=>{setPassenger({...passenger,visa_no:e.target.value});console.log(passenger)}} />

      <TextInput name="id_no" id="id_no" type="text" placeholder="Type ID No" lebel="ID NO" value={passenger.id_no} handleChange={(e)=>{setPassenger({...passenger,id_no:e.target.value});console.log(passenger)}} />

      <TextInput name="visa_stamping_date" id="visa_stamping_date" type="text" placeholder="Type Visa Stamping Date" lebel="Visa Stamping Date" value={passenger.visa_stamping_date} handleChange={(e)=>{setPassenger({...passenger,visa_stamping_date:e.target.value});console.log(passenger)}} />



      <TextInput name="training" id="training" type="text" placeholder="Type Training Info" lebel="Training Info" value={passenger.training} handleChange={(e)=>{setPassenger({...passenger,training:e.target.value});console.log(passenger)}} />

      <TextInput name="bmet_finger" id="bmet_finger" type="text" placeholder="Type BMET Finger" lebel="BMET Finger" value={passenger.bmet_finger} handleChange={(e)=>{setPassenger({...passenger,bmet_finger:e.target.value});console.log(passenger)}} />

      <TextInput name="manpower" id="manpower" type="text" placeholder="Type Manpower" lebel="Manpower" value={passenger.manpower} handleChange={(e)=>{setPassenger({...passenger,manpower:e.target.value});console.log(passenger)}} />

      <TextAreaInput name="delivery" id="delivery" placeholder="Type Delivery Information" lebel="Delivery Information" value={passenger.delivery} handleChange={(e)=>{setPassenger({...passenger,delivery:e.target.value});console.log(passenger)}} />

      <TextAreaInput name="payment" id="payment" placeholder="Type Payment Information" lebel="Payment" value={passenger.payment} handleChange={(e)=>{setPassenger({...passenger,payment:e.target.value});console.log(passenger)}} />

      <TextAreaInput name="remark"
    id="remark" placeholder="Message"
    handleChange={(e)=>{setPassenger({...passenger,remark:e.target.value})}} lebel="Message" />
      <TextAreaInput value={passenger.status} name="status" id="status" placeholder="Status"
    handleChange={(e)=>{setPassenger({...passenger,status:e.target.value})}} lebel="Status" />
      {/* <div className="mb-4">
  <label className="block text-white">Remark</label>
  <textarea
    value={passenger.remark}
    name={"remark"}
    id={"remark"}
    className="form-input mt-1 block w-full p-2"
    placeholder={"Remark"}
    onChange={(e)=>{setPassenger({...passenger,remark:e.target.value})}}
    required
  />
      </div> */}

     
     
    </div>
    <div className="flex justify-center">
    <button className="bg-blue-500 my-3  text-white px-4 py-2" type="submit">Submit</button></div>
  </form>
</div>
            </div>
        </div>
       
    </div>
  )
}

export default AddEntry