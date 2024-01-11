"use client"
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState,useEffectLayout } from 'react'

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'name',
        selector: row => row.name,
    },
    {
        name: 'Passport No',
        selector: row => row.passport_no,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
    },
    {
        name: 'Country',
        selector: row => row.country,
    },
    {
        name: 'Medical',
        selector: row => row.medical,
    },
    {
        name: 'Mofa',
        selector: row => row.mofa,
    },
    {
        name: 'Bio Finger',
        selector: row => row.bio_finger,
    },
    {
        name: 'pc_no',
        selector: row => row.visa_no,
    },
    {
        name: 'Visa/ID No',
        selector: row => row.passport_no ,
    },
    {
        name: 'Training',
        selector: row => row.training ,
    },
    {
        name: 'BMET Finger',
        selector: row => row.bmet_finger ,
    },
    {
        name: 'Visa Stamping Date',
        selector: row => row.visa_stamping_date ,
    },
    {
        name: 'Manpower',
        selector: row => row.manpower ,
    },
    {
        name: 'Delivery',
        selector: row => row.delivery ,
    },
    {
        name: 'payment',
        selector: row => row.payment ,
    },
    {
        name: 'Agent',
        selector: row => row.agent ,
    },
    {
        name: 'Remark',
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
        <Link href="/UserDashboard" className="flex items-center flex-shrink-0 text-white mr-6 hover:text-pink-800 text-xl cursor-pointer">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            {user?.name?.toUpperCase()}
          </span>
        </Link>

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