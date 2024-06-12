"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import qrcode from '../../public/qrcode.jpg';
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { navigation } from "../constants";
import Section from "../components/Section";

export default function PaymentGateway() {
    const [paymentMethod, setPaymentMethod] = useState('upi');

    return (
        <>
            <div>
                <Navbar position={false} data={navigation} hide={true} />
                <Section>
                    <div className="flex flex-col justify-center items-center overflow-hidden lg:px-64">
                        <div className="flex flex-col items-center bg-conic-gradient p-0.25 min-w-[300px] max-w-[400px] lg:min-w-[400px] lg:max-w-[500px] rounded-[2.5rem]">
                            <div className="p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden w-full">
                                <h4 className="h4 mb-4 font-extrabold text-center text-white">Payment Gateway</h4>
                                <div className="flex items-center justify-center w-full mb-6">
                                    <Image src={qrcode} width={100} height={100} alt="logo" />
                                </div>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div className="flex justify-center space-x-4 mb-4">
                                        <button
                                            type="button"
                                            className={`px-4 py-2 rounded-lg ${paymentMethod === 'upi' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
                                            onClick={() => setPaymentMethod('upi')}
                                        >
                                            UPI
                                        </button>
                                        <button
                                            type="button"
                                            className={`px-4 py-2 rounded-lg ${paymentMethod === 'card' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
                                            onClick={() => setPaymentMethod('card')}
                                        >
                                            Card
                                        </button>
                                    </div>
                                    {paymentMethod === 'upi' && (
                                        <div>
                                            <label htmlFor="upi" className="block mb-2 text-sm font-medium text-white">UPI ID</label>
                                            <input
                                                type="text"
                                                name="upi"
                                                id="upi"
                                                className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="your-upi-id@bank"
                                            />
                                        </div>
                                    )}
                                    {paymentMethod === 'card' && (
                                        <>
                                            <div>
                                                <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-white">Card Number</label>
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    id="cardNumber"
                                                    className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="1234 5678 9012 3456"
                                                    required
                                                />
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="w-1/2">
                                                    <label htmlFor="expiryDate" className="block mb-2 text-sm font-medium text-white">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        name="expiryDate"
                                                        id="expiryDate"
                                                        className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="MM/YY"
                                                        required
                                                    />
                                                </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-white">CVV</label>
                                                    <input
                                                        type="text"
                                                        name="cvv"
                                                        id="cvv"
                                                        className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="•••"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex flex-col justify-center">
                                        <Button white>
                                            Pay Now
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Section>
                <Footer />
            </div>
        </>
    );
}
