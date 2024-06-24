
"use server"
import Razorpay from "razorpay";
import shortid from "shortid";
import crypto from "crypto";
import prisma from "@/app/lib/db";

const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

export async function verifypayment(formdata:FormData){
    const orderid=formdata.get('razorpay_order_id')as string;
    const paymentid=formdata.get('razorpay_payment_id');
    const signature=formdata.get('razorpay_signature');

    
    const body=orderid+'|'+paymentid;
    const order=await instance.orders.fetch(orderid);

    

    const expectedSignature = crypto
   .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY!)
   .update(body.toString())
   .digest("hex");

    if (expectedSignature === signature) {
        console.log("genuine payment")
        await prisma.orders.create({
            data:{
                orderid:orderid,
                amount:order.amount as number,
                status:order.status,
                customer_name:"Prakash",
                Email:"vijayatrprakash@gmail.com",
                Phone_No: 1234567890,
                Address:"Chennai",  
            }
        });
        console.log(order);
     return {
        message: "success",
     };
    }
    else{
        console.log("fake payment")
        return {
            error:"failed"
        };
    }


}

export async function returnid(){
    const payment_capture = 1;
    const amount = 2 * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
            paymentFor: "testingDemo",
            userId: "100",
            productId: 'P100'
        }
    };

   const order = await instance.orders.create(options);
   
   return order;

   
}
