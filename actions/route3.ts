"use server"
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import bcrypt from "bcrypt";

export async function sendmail(){
    //implement logic for checking mail

    const resetToken = uuidv4();
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1);

// update that resetoken and resettokenexpiry in the user password collection

const transporter = nodemailer.createTransport({
    service: 'your-email-service',  // e.g., 'Gmail'
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetUrl = `${process.env.NEXTAUTH_URL}/forgotpass/${resetToken}`;
  const mailOptions = {
    to: "actual client email",
    from: process.env.EMAIL_USER,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  };

  try{
    await transporter.sendMail(mailOptions);
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

export async function checktoken(){
//first check whether the token is there in db..if yes then hash the new password and update the user password collection


}
