
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
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const phone = formdata.get('phone_number') as string;
    const address = formdata.get('address') as string;
    const country = formdata.get('country') as string;
    const state = formdata.get('state') as string;
    const zipcode = formdata.get('zipcode') as string;
    const quantity = formdata.get('quantity') as string;
    const productid = formdata.get('productid') as string;  
    const data=await prisma.product.findUnique({
        where:{
            id:productid
        },
        select:{
            
            name:true,
            
        }
    });
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
                customer_name:name,
                Email:email,
                Phone_No: phone,
                Address:address,
                Country:country,
                State:state,
                Zip_Code:zipcode,
                Quantity:"1",
                Delivered:false,
                OrderedDate:new Date().toISOString(), 
                ProductName:[data?.name as string]
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

export async function returnid(formdata:FormData){
    const id=formdata.get('id') as string;
    const quantity=formdata.get('quantity') as string;
    const data=await prisma.product.findUnique({
        where:{
            id:id
        },
        select:{
            price:true,
            name:true,
            id:true,
        }
    });
    const price= data?.price as number;
    

        const payment_capture = 1;
        const amt=price * 100
        const amount =   amt * parseInt(quantity);
        const currency = "INR";
        const options = {
            amount: (amount).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
            notes: {
                paymentFor:data?.name as string ,
                
                productId: data?.id as string,
            }
        };
        
        const order = await instance.orders.create(options);
        
        return order;
    

   
}
