import { NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';


async function getsession() {
  const session = await getServerSession();
  return session;
}

 async function getusers() {
  const user = await getsession();
  const currentuser = user?.user?.email as string;
  try {
    if (!currentuser) {
      return {
        error: "No user found.",
      };
    }
    const check = await prisma.allowlist.findUnique({
      where: {
        email: currentuser,
      },
    });
    if (!check) {
      return {
        error: "You are not authorized to add users.",
      };
    } else if (check && check.read && check.write) {
      
      return {
        users: "users",
      };
    } else if (check && check.read && !check.write) {
      return {
        error: "You do not have write access.",
      };
    } else if (check && !check.read && check.write) {
      return {
        error: "You do not have read access.",
      };
    }
  } catch (e) {
    return {
      error: e,
    };
  }
}



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
    return NextResponse.json({ success: false, error: error });
  }
}
else if(check?.error){
  return NextResponse.json({error:check.error})
}
}
