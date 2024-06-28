import { NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { ObjectId } from 'mongodb';
import { getusers } from '@/actions/route2';



export async function POST(request: Request) {
  const check=await getusers();
  if(check?.users){
  const data = await request.json();

  const formattedData = data.map((record: any) => ({
    id: new ObjectId().toString(),
    name: record.name,
    email: record.email,
    courseenrolled: record.courseenrolled,
    courseenrolleddate: new Date(record.courseenrolleddate),
    coursecompleted: record.coursecompleted,
    coursecompleteddate: record.coursecompleteddate ? new Date(record.coursecompleteddate) : null,
    coursecompletedgrade: record.coursecompletedgrade || null,
    collegeName: record.collegeName,
  }));

  try {
    const createdStudents = await prisma.students.createMany({
      data: formattedData,
    });
    
    return NextResponse.json({ success: true, data: createdStudents });
  } catch (error) {
    console.error('Error uploading data:', error);
    return NextResponse.json({ success: false, error: error });
  }
}
else if(check?.error){
  return NextResponse.json({error:check.error})
}
}
