"use client";
import React from 'react';
import Button from "../components/Button";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative p-8 text-center bg-n-7 rounded-lg shadow-lg">
          <div className="w-12 h-12 rounded-full bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-green-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-white">
            Payment Successful
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Your order has been delivered to your address.
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Thank you for shopping with Vaayusastra!
          </p>
          <Link href='/#products'>
          <Button white className="mt-4 py-2">
            Continue Shopping
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
