"use server"
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import bcrypt from "bcrypt";
import prisma from '@/app/lib/db';

export async function sendmail(formdata:FormData){
    const email = formdata.get("email") as string;
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        return {
            error: 'No user found with that email.',
        };
    }
    else{
    const resetToken = uuidv4();
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setMinutes(resetTokenExpiry.getMinutes() + 5);
    await prisma.user.update({
        where: {
            email: email,
        },
        data: {
            resetToken: resetToken,
            resetTokenExpiry: resetTokenExpiry,
        },
    });

const transporter = nodemailer.createTransport({
    service: 'Gmail',  
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetUrl = `${process.env.NEXTAUTH_URL}/forgotpass/${resetToken}`;
  const mailOptions = {
    to: email,
    from: process.env.EMAIL_USER,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.</p>. Note that this link will is valid only for 5 minutes.`,
  };

  try{
    const set=await transporter.sendMail(mailOptions);
    console.log("success"+set);
    return {
        message: 'Success! Check your email for a link to reset your password.',
    }
  }
    catch(err){
        console.log(err);
        return {
            error: 'Sorry, something went wrong. Please try again.',
        }
    }
}
}

export async function checktoken(formdata:FormData){

    const token = formdata.get("token") as string;
    console.log("token is",token)
    const user = await prisma.user.findFirst({
        where: {
            resetToken: token,
        },
    });
    if (!user  || user.resetTokenExpiry === null || user.resetTokenExpiry < new Date()) {
        return false;
    }
    return user.id
}

export async function resetpassword(formdata:FormData){
  const newPassword = formdata.get("newpassword") as string;
  const check=await checktoken(formdata);
  if(!check){
    console.log("Invalid Token")
    return {
        error: 'This token is either invalid or expired.',
    }
  }
  else{
    const hashedPassword = await bcrypt.hash(newPassword, 10); 
    await prisma.user.update({
      where: { id: check },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    console.log("Password updated");
  }
}
  
