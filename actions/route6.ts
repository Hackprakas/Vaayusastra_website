"use server"

import prisma from "@/app/lib/db"

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
        where:{
            coursecompletedgrade:{
                in:['S','A','A+']
            }
        }
    })
    return data;
}