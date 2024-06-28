import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/sidebar';
import Button from '@/app/components/Button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import { adminNavigation } from '@/app/constants';
import prisma from '@/app/lib/db';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  
  const orders=await prisma.orders.findMany();
  return (
    <div className="flex">
      <Sidebar />
      <div className='block md:hidden lg:hidden '>
        <Navbar admin={true} data={adminNavigation} hide position />
      </div>
      <div className=" p-8 mx-2 mt-24 md:mt-10 lg:mt-10 md:pt-0 lg:pt-0 grid justify-center w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {orders.map(order => (
          <div
            key={order.id}
            className=" flex flex-col justify-between p-10 md:p-7 lg:p-12 mx-2 my-2 bg-n-7 h-[350px] border-gray-300 rounded-lg shadow  "
          >
            
            <div >
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Order_id: {order.orderid.substring(0,11)}...  
              </h4>
              <div className='flex mt-6'>
                <div className='font-bold text-sm text-n-4'>Product Purchased:</div>
                <div className=' ml-2 text-sm text-n-4'>{order.ProductName[0]}</div>
              </div>
              <div className='flex mt-2'>
                <div className='font-bold text-sm text-n-4'>Purchased Date:</div>
                <div className=' ml-2 text-sm text-n-4'>{order.OrderedDate.toISOString().substring(0,10)}</div>
              </div>
              <div className='flex mt-2'>
                <div className='font-bold text-sm text-n-4'>Customer Name:</div>
                <div className=' ml-2 text-sm text-n-4'>{order.customer_name}</div>
              </div>
            </div>
            <Link href={`/admin/table/${order.id}`}>
            <Button white className="mt-4 w-full py-2">
              <div className='flex justify-center items-center '>

                      More Details
                      <ArrowRight className='ml-2'/>
              </div>
                    </Button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
