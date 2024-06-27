
import React from 'react';

import Navbar from '../components/navbar';
import { ProductNavigation } from '../constants';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Button from '../components/Button';
import prisma from '../lib/db';

import Link from 'next/link';
import Productsslider from '../components/productsslider';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({params}: PageProps) {
  if(params.id.length!=24){
    return (<div>404 not found</div>)
  }
  
const data=await prisma.product.findUnique({
  where:{
    id:params.id
  }
})
if(!data){
  return (<div>404 not found</div>)
}
  
  return (
    <>
      <Navbar data={ProductNavigation} position={true} hide={true} admin={false} />
      <Section>
        <div className="max-w-screen-xl px-16 py-24 md:py-16 lg:py-16 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <Productsslider data={data} />

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className='flex w-full justify-between'>

              <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white">
                {data?.name}
              </h1>
              {data?.Stock==="In Stock"?(<div className='-ml-8'>
                <div className='text-green-300'>In Stock</div>
              </div>):(<div className='-ml-8'>
                <div className='text-red-500'>Out of Stock</div>
              </div>)}
              
              
              </div>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl dark:text-white">
                  {`Rs.${data?.price}`}
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-none text-n-2">
                    (5.0)
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <Link href={`${params.id}/Checkout`}>
                <Button white disabled={data?.Stock==="In Stock"? false:true}>{data?.Stock==="In Stock"? "Buy Now":"Out of Stock"}</Button>
              </Link>
                
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-n-2">
                {data?.description}
              </p>

              
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
