"use server"
import { getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth"
import bcrypt from "bcrypt";

export async function getsession() {
    const session = await getServerSession();
    console.log("sees"+session?.user?.email);
    return session;
   
}
export async function gettoken(){
    const csrfToken = await getCsrfToken();
    return csrfToken;
}
export async function gethash(){
    const hash = await bcrypt.hash("123456", 10);
    console.log(hash)
    return hash;
}