"use server"
import nodemailer from "nodemailer";
export async function sendemail(formdata:FormData){
if (formdata) {
    const email=formdata.get('email');
    const name=formdata.get('name');
    const message=formdata.get('message');

    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email?.toString() ,
        to: process.env.EMAIL_USER, 
        subject: 'New message from'+name?.toString(),
        text: email+" "+"has a new message for you:"+`\n ${message?.toString()}`,
      };
  
      try {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent');
      } catch (error) {
        console.error(error);
      }
    }else{
        console.log('Form data is empty');
    } }
