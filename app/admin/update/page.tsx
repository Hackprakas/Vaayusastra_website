import React from 'react';
import Sidebar from '@/app/components/sidebar';
import Navbar from '@/app/components/navbar';
import { adminNavigation } from '@/app/constants';
import Image from 'next/image';
import prisma from '@/app/lib/db';
import { grid } from '@/app/components/assets';
import TagLine from '@/app/components/Tagline';
import UpdateQuantity from "../../components/updatequantity"; 

export default async function Page() {
    const products = await prisma.product.findMany();

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col p-8 mx-2 mt-24 md:mt-10 lg:mt-10">
                <div className="block md:hidden lg:hidden">
                    <Navbar admin={true} data={adminNavigation} hide position />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((item) => (
                        <div
                            className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6"
                            key={item.id}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden w-full xl:p-15">
                                <div className="absolute top-0 left-0 w-full object-cover">
                                    <Image
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between w-full mb-5 md:mb-10 space-x-6">
                                        <TagLine>{item.name}</TagLine>
                                        {item.image && (
                                            <Image
                                                className="p-1 rounded-full bg-blend-normal ring-2 ring-gray-300"
                                                src={item.image}
                                                height={100}
                                                width={100}
                                                alt="Bordered avatar"
                                            />
                                        )}
                                    </div>
                                    <p className="body-2 text-n-4">{item.description}</p>
                                    <div className="mt-4">
                                        <UpdateQuantity params={{ id: item.id }} datas={item} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
