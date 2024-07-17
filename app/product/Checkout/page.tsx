"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from "@/app/components/Footer";
import Section from "@/app/components/Section";
import Button from "@/app/components/Button";
import { navigation } from "../../constants";
import { returnid, verifypayment } from '@/actions/route5';
import { useRouter } from 'next/navigation';
import Loadingbtn from '@/app/components/loading';
import CartContext from '@/app/components/context';
import { useContext } from 'react';

export default function Page() {
  const [state,setstate]=useState("Proceed to Payment");
  const [text, setText] = useState('Verifying Transaction');
  const { cartIds, setCartIds } = useContext(CartContext);
  const router = useRouter();
  

  useEffect(() => {
    const originalText = state;
    if (originalText === 'Proceed to Payment')
       {setText(originalText)

       }
       else{ 
         let dots = '';
         const interval = setInterval(() => {
           dots = dots.length < 3 ? dots + '.' : '';
           setText(`${originalText}${dots}`);
          }, 500); 
          return () => clearInterval(interval);
        }
    
  
  }, [text]);
  

  const makePayment = async (formdata : FormData) => { 
    setstate("Payment is processing")   
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string;
    const datas=new FormData();
    datas.append("id",cartIds);
    datas.append("quantity",formdata.get("quantity") as string);
    const data = await returnid(datas);
    
    const options = {
      key: key,
      name: "Vaayusastra Aerospace",
      currency: data?.currency,
      amount: "20000",
      order_id: data?.id,
      description: "Payment Gateway",
      handler: async function (response: any) {
       
        const datas = new FormData();
        datas.append('razorpay_payment_id', response.razorpay_payment_id);
        datas.append('razorpay_order_id', response.razorpay_order_id);
        datas.append('razorpay_signature', response.razorpay_signature);
        datas.append("name",formdata.get('name') as string);
        datas.append("email",formdata.get('email') as string);
        datas.append("country",formdata.get('country') as string);
        datas.append("state",formdata.get('state') as string);
        datas.append("phone_number",formdata.get('phonenumber') as string);
        datas.append("address",formdata.get('address') as string);
        datas.append("zipcode",formdata.get("zipcode") as string);
        datas.append("quantity",formdata.get("quantity") as string);
        datas.append("productid",cartIds as string);
        setstate("Verifying Transaction.......")
        const verifyData = await verifypayment(datas);
        if (verifyData.message) {
          setstate("Proceed to Payment")
          alert(`Your payment with orderid: ${cartIds} is successful!! Thank you for shopping with Vaayusastra`);
         
        } else if (verifyData.error) {
          alert(verifyData.error);
        }
      },
      prefill: {
        name: formdata.get('name') as string,
        email: formdata.get('email') as string,
        contact: formdata.get('phonenumber') as string,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <div>
  <Navbar position={true} data={navigation} hide={true} admin={false} />
  <Section>
    <div className="p-8 lg:p-14 md:10">
  <form action={makePayment} className="max-w-screen-xl px-14 2xl:px-0 ml-4">
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-white">Delivery Details</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-white">Your name*</label>
                <input type="text" id="your_name" name="name" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter Name" required />
              </div>
              <div>
                <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-white">Quantity Required*</label>
                <input type="number" id="your_name" name="quantity" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter your Product quantity" required />
              </div>
              <div>
                <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-white">Your email*</label>
                <input type="email" id="your_email" name="email" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label htmlFor="country" className="mb-2 block text-sm font-medium text-white">Country*</label>
                <input type="text" id="country" name="country" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter Country" required />
              </div>
              <div>
                <label htmlFor="state" className="mb-2 block text-sm font-medium text-white">State*</label>
                <input type="text" id="state" name="state" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter State" required />
              </div>
              <div>
                <label htmlFor="phone_number" className="mb-2 block text-sm font-medium text-white">Phone Number*</label>
                <input type="text" id="phone_number" name="phonenumber" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="+91 1234567890" required />
              </div>
              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-white">Address*</label>
                <input type="text" id="address" name="address" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter Address" required />
              </div>
              <div>
                <label htmlFor="zipcode" className="mb-2 block text-sm font-medium text-white">Pin Code*</label>
                <input type="number" id="zipcode" name="zipcode" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="XXXXXX" required />
              </div>
            </div>
          </div>
          <div className="flex justify-center  mt-6">
            <div>

              <Loadingbtn  content={text} />
            </div>
            </div>
        </form>
        
      </div>
  </Section>
  <Footer />
</div>
  );
}
