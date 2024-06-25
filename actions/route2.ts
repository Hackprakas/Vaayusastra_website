"use server";
import { getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth";
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt";
import { get } from "http";

export async function getsession() {
  const session = await getServerSession();
  console.log("sees" + session?.user?.email);
  return session;
}

export async function getusers() {
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
    console.log(e);
    return {
      error: e,
    };
  }
}
export async function addgmailuser(formdata: FormData) {
  const email = formdata.get("email") as string;
  try{

  
  const check= await getusers();
  if(check?.users){

  
    const find = await prisma.allowlist.findUnique({
      where: {
        email: email,
      },
    });
    if (find) {
      console.log("User already exists");
      return {
        error: "User already exists.",
      };
    }
    await prisma.allowlist.create({
      data: {
        email: email,
        read: true,
        write: true,
      },
    });
    return {
      message: "User added successfully.",
    };
  }
  else if(check?.error){
    return{
      error:check.error
    }
  }
}
catch(e){
  console.log(e);
  return {
    error: e,
  };
}
}
export async function addemailuser(formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  const name = formdata.get("name") as string;
  const hash = await gethash(password);
  const user = await getsession();
  const currentuser = user?.user?.email as string;

  try {
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
      const find = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (find) {
        return {
          error: "User already exists.",
        };
      }

      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hash,
        },
      });
      await prisma.allowlist.create({
        data: {
          email: email,
          read: true,
          write: true,
        },
      });

      return {
        message: "User added successfully.",
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
    console.log(e);
    return {
      error: e,
    };
  }
}

async function gethash(text: string) {
  const hash = await bcrypt.hash(text, 10);
  console.log(hash);
  return hash;
}
