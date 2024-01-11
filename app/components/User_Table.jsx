"use client"
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState,useEffectLayout } from 'react'

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: <p className="font-bold text-lg">Name</p>,
        selector: row => <div className="flex gap-1 flex-col p-1"><h3 className="font-bold text-md uppercase">{row.name}</h3><p>{row.passport_no}</p><p>{row.gender}</p></div>,
        style: {
            width: '300px', 
            overflow:"hidden" // Set custom width for this column
        },
    },
    
    {
        name: <p className="font-bold text-lg">Country</p>,
        selector: row => row.country,
    },
    {
        name: <p className="font-bold text-lg">Medical</p>,
        selector: row => row.medical,
    },
    {
        name: <p className="font-bold text-lg">Mofa</p>,
        selector: row => row.mofa,
    },
    {
        name: <p className="font-bold text-lg">Biometric Finger</p>,
        selector: row => row.bio_finger,
    },
    {
        name: <p className="font-bold text-lg">PC No</p>,
        selector: row => row.pc_no,
    },
    {
        name: <p className="font-bold text-lg">Visa/ID No</p>,
        selector: row => <div className="min-w-[230px] flex gap-1 flex-col p-1"><h3 className="">{row.visa_no}</h3><p>{row.id_no}</p></div> ,
    },
    {
        name: <p className="font-bold text-lg">Visa Stamping Date</p>,
        selector: row => row.visa_stamping_date ,
    },
    {
        name: <p className="font-bold text-lg">Training</p>,
        selector: row => row.training ,
    },
    {
        name: <p className="font-bold text-lg">BMET Finger</p>,
        selector: row => row.bmet_finger ,
    },
   
    {
        name: <p className="font-bold text-lg">Manpower</p>,
        selector: row => row.manpower ,
    },
    {
        name: <p className="font-bold text-lg">Delivery</p>,
        selector: row => row.delivery ,
    },
    {
        name: <p className="font-bold text-lg">Payment</p>,
        selector: row => row.payment ,
    },
   
    {
        name: <p className="font-bold text-lg">Remark</p>,
        selector: row => row.remark ,
    },
];


const User_Table = ({passenger}) => {
    const router = useRouter();
        const user =  typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('user')) : false;
    useEffect(()=>{
        if(!user){
            redirect("/")
        }
    },[]);
    console.log(user)
    const singleUsersData = passenger.filter((pax,index)=>{
        return pax.agent ===  user?.name;
    })
    console.log(singleUsersData)
    const HandleLogout = () => {
        typeof window !== "undefined" ? window.localStorage.removeItem('user') : false;
        router.push('/')
      }
    const [search, setSearch]= useState('');
    const [filter, setFilter]= useState([]);
    useEffect(()=>{
        const result= singleUsersData.filter((item)=>{
         return item?.name?.toLowerCase().match(search.toLocaleLowerCase()) || item?.passport_no?.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);
  return (
    <>
    <nav className="flex items-center top-0 sticky w-full justify-between bg-teal-500 py-3 px-6">
        <p className="flex items-center flex-shrink-0 text-white mr-6 hover:text-pink-800 text-xl cursor-pointer">
          
            {user?.name?.toUpperCase()}
          
        </p>

        <div className="flex gap-3">
           
            <button
             onClick={HandleLogout}
              className="inline-block text-md px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent font-bold  hover:text-teal-500 hover:bg-black lg:mt-0"
            >
              Logout
            </button>
        </div>
      </nav>
    <DataTable
            columns={columns}
            data={filter}
            pagination
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type="text" className="w-25 form-control border-2 border-blue-500 p-2 rounded-md" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>

            }
        />
{/* <input type="text" className="w-25 form-control border-2 border-blue-500 p-2 rounded-md" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
<table class="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b">Name</th>
                    <th class="py-2 px-4 border-b">Passport No</th>
                    <th class="py-2 px-4 border-b">Gender</th>
                    <th class="py-2 px-4 border-b">Country</th>
                    <th class="py-2 px-4 border-b">Medical</th>
                    <th class="py-2 px-4 border-b">Mofa</th>
                    <th class="py-2 px-4 border-b">Bio Finger</th>
                    <th class="py-2 px-4 border-b">Visa No</th>
                    <th class="py-2 px-4 border-b">Visa/ID No</th>
                    <th class="py-2 px-4 border-b">Training</th>
                    <th class="py-2 px-4 border-b">BMET Finger</th>
                    <th class="py-2 px-4 border-b">Visa Stamping Date</th>
                    <th class="py-2 px-4 border-b">Manpower</th>
                    <th class="py-2 px-4 border-b">Delivery</th>
                    <th class="py-2 px-4 border-b">Payment</th>
                    <th class="py-2 px-4 border-b">Agent</th>
                    <th class="py-2 px-4 border-b">Remark</th>
                </tr>
            </thead>
            <tbody>
                {filter.map((item,ind)=> <tr key={item._id}>
                    <td class="py-2 px-4 border-b">{item.name}</td>
                    <td class="py-2 px-4 border-b">{item.passport_no}</td>
                    <td class="py-2 px-4 border-b">{item.gender}</td>
                    <td class="py-2 px-4 border-b">{item.country}</td>
                    <td class="py-2 px-4 border-b">{item.medical}</td>
                    <td class="py-2 px-4 border-b">{item.mofa}</td>
                    <td class="py-2 px-4 border-b">{item.bio_finger}</td>
                    <td class="py-2 px-4 border-b">{item.visa_no}</td>
                    <td class="py-2 px-4 border-b">{item.id_no}</td>
                    <td class="py-2 px-4 border-b">{item.training}</td>
                    <td class="py-2 px-4 border-b">{item.bmet_finger}</td>
                    <td class="py-2 px-4 border-b">{item.visa_stamping_date}</td>
                    <td class="py-2 px-4 border-b">{item.manpower}</td>
                    <td class="py-2 px-4 border-b">{item.delivery}</td>
                    <td class="py-2 px-4 border-b">{item.payment}</td>
                    <td class="py-2 px-4 border-b">{item.agent}</td>
                    <td class="py-2 px-4 border-b">{item.remark}</td>
                </tr>)}
               
               
            </tbody>
        </table> */}
        </>
  )
}

export default User_Table