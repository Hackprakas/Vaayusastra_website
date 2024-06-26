import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/sidebar';
import Button from '@/app/components/Button';


const orders = [
  { id: 21389 },
  { id: 21390 },
  { id: 21391 },
  { id: 21392 },
  { id: 21393 },
  { id: 21394 },
];

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 py-12 px-12">
        {orders.map(order => (
          <div
            key={order.id}
            className=" p-16 bg-n-7 border-gray-300 rounded-lg shadow  "
          >
            <Link href={`/orders/${order.id}`}>
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Order_id: {order.id}
              </h4>
            </Link>
            <Link href={`/orders/${order.id}`}>
            <Button white className="mt-4 w-full py-2">
                      View order details
                    </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
