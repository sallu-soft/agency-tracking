"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { MdDelete, MdEditDocument } from 'react-icons/md';





const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
const Admin_Table = ({passenger}) => {
    const router = useRouter()
    const [search, setSearch]= useState('');
    const [filter, setFilter]= useState([]);
    const HandleRemove = async (id)=>{
        try {
            const res = await fetch(`/api/passenger/${id}`, {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({id}),
            });
      
            if (res.ok) {
              alert("Successfully Deleted Your User")
              router.refresh();
            } else {
              throw new Error("Failed to Delete The User");
            }
          } catch (error) {
            console.log(error);
          }
    }
    const columns = [
        {
            name: 'Actions',
            selector: row => <div className="flex items-center gap-2"><Link href={`AdminDashboard/EditEntry/${row._id}`}> <MdEditDocument className="text-2xl  text-green-600 font-bold"/></Link><MdDelete className="text-2xl text-red-800 font-bold cursor-pointer" onClick={()=>HandleRemove(row._id)}/></div>,
        },
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
    useEffect(()=>{
        const result= passenger.filter((item)=>{
         return item?.name?.toLowerCase().match(search.toLocaleLowerCase()) || item?.passport_no?.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);
  return (
    <DataTable
            columns={columns}
            data={filter}
            pagination
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type="text" className="w-25 form-control border-2 border-blue-500 p-2 rounded-md" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>

            }
            subHeaderAlign="right"
        />
  )
}

export default Admin_Table