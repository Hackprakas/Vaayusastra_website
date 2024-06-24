import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

export async function POST(request: Request) {
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
  }));

  try {
    const createdStudents = await prisma.students.createMany({
      data: formattedData,
    });
    
    return NextResponse.json({ success: true, data: createdStudents });
  } catch (error) {
    console.error('Error uploading data:', error);
    return NextResponse.json({ success: false, error: 'Failed to upload data' });
  }
}
