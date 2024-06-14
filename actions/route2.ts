"use server"
import { getServerSession } from "next-auth"

export async function getsession() {
    const session = await getServerSession();
    console.log("sees"+session?.user?.email);
    return session;
   
}