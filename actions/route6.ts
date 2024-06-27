"use server"

import prisma from "@/app/lib/db"
import { revalidatePath } from "next/cache";

export async function getdatetime(){
    const data=await prisma.students.findMany({
        select:{
            courseenrolleddate:true,
            courseenrolled:true,
        }
    })
    return data;
}
export async function getdata(){
    const data=await prisma.students.findMany({
        select:{
            coursecompletedgrade:true,
        },
        // where:{
        //     coursecompletedgrade:{
        //         in:['S','A','A+']
        //     }
        // }
    })
    return data;
}
export async function getcollege(){
    const data=await prisma.students.findMany({
        select:{
            collegeName:true,
        }
    })
    return data;
}

export async function updateDeliveryStatus(formData: FormData) {
    
    const delivered = formData.get('delivered') === 'on';
    const id = formData.get('id') as string;

    await prisma.orders.update({
      where: { id: id },
      data: { Delivered: delivered },
    });
    

    revalidatePath(`/order-details/${id}`);
    return true;
  }