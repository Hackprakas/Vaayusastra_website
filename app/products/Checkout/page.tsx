"use client";

import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from "@/app/components/Footer";
import Section from "@/app/components/Section";
import Button from "@/app/components/Button";
import { navigation } from "../../constants";
import { returnid, verifypayment } from '@/actions/route5';

export default function Page() {
  const makePayment = async (formdata : FormData) => {    
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string;
    console.log("KEY" + key);
    const data = await returnid();
    console.log("id:" + data.id);
    const options = {
      key: key,
      name: "Vaayusastra Aerospace",
      currency: data.currency,
      amount: "20000",
      order_id: data.id,
      description: "Payment Gateway",
      handler: async function (response: any) {
        console.log(response);
        const datas = new FormData();
        datas.append('razorpay_payment_id', response.razorpay_payment_id);
        datas.append('razorpay_order_id', response.razorpay_order_id);
        datas.append('razorpay_signature', response.razorpay_signature);
        datas.append("name",formdata.get('name') as string);
        datas.append("email",formdata.get('email') as string);
        datas.append("country",formdata.get('country') as string);
        datas.append("state",formdata.get('state') as string);
        datas.append("phone_number",formdata.get('phone_number') as string);
        datas.append("address",formdata.get('address') as string);
        datas.append("zipcode",formdata.get("zipcode") as string);
        const verifyData = await verifypayment(datas);
        console.log("response verify==", verifyData);

        if (verifyData.message) {
          alert("payment is success");
          window.location.href = "/";
        } else if (verifyData.error) {
          alert("payment is failed");
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@gmail.com",
        contact: "000000000",
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
        <section className="py-8 antialiased md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form action={makePayment}  className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="space-y-8">
                <h2 className="text-xl font-semibold text-white">Delivery Details</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-white">Your name*</label>
                    <input type="text" id="your_name" name="name" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="Enter Name" required />
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
                    <input type="text" id="phone_number" name="phone_number" className="block w-full rounded-lg border p-2.5 text-sm border-gray-800 bg-gray-800 text-white placeholder:text-gray-400" placeholder="+91 1234567890" required />
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

            <div className="w-full mt-8 lg:mt-0 lg:max-w-md">
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-white">Order Summary</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Subtotal</span>
                    <span className="text-sm font-medium text-white">Rs.180.00</span>
                    {/* <input type="hidden" name="subtotal" value="180.00" /> */}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Shipping</span>
                    <span className="text-sm font-medium text-white">Rs.10.00</span>
                    {/* <input type="hidden" name="shipping" value="10.00" /> */}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Tax (estimated)</span>
                    <span className="text-sm font-medium text-white">Rs.10.00</span>
                    {/* <input type="hidden" name="tax" value="10.00" /> */}
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-600 pt-4">
                    <span className="text-lg font-semibold text-white">Total</span>
                    <span className="text-lg font-semibold text-white">Rs.200.00</span>
                    {/* <input type="hidden" name="total" value="200.00" /> */}
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button white className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow">
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            </div>
          </form>
          </div>
        </section>
      </Section>
      <Footer />
    </div>
  );
}
