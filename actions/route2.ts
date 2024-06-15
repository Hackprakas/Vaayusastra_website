"use server"
import { getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth"

export async function getsession() {
    const session = await getServerSession();
    console.log("sees"+session?.user?.email);
    return session;
   
}
export async function gettoken(){
    const csrfToken = await getCsrfToken();
    return csrfToken;
}