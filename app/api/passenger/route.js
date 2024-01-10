
import Passenger from "@/Models/passenger";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function POST(request){
    const {
        name,
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
        statusM
    } = await request.json();

    console.log(statusM)
    await connectMongoDB();
    await Passenger.create({name,
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
        statusM
        
    })
    return NextResponse.json({message:"Passenger Created successfully"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const passenger = await Passenger.find();
    return NextResponse.json(passenger,{status:201});
}