"use client"

import React from 'react'
import { updateDeliveryStatus } from '../../actions/route6'

interface PageProps {
    params: {
        id: string;
    };
    datas:{
        id: string;
    Address: string;
    ProductName: string[];
    Country: string;
    Email: string;
    Phone_No: string;
    State: string;
    Zip_Code: string;
    amount: bigint;
    customer_name: string;
    orderid: string;
    status: string;
    Delivered: boolean;
    OrderedDate: Date;
    Quantity: number;
    }
}
export default function Updatedelivery({ params }: PageProps, datas: any) {

    async function update(formData: FormData) {

        const delivered = formData.get('delivered') === 'on';
        const data = new FormData();
        data.append('delivered', delivered.toString());
        data.append('id', params.id);
        const res=await updateDeliveryStatus(data);
        if(res){
            alert('Updated Successfully');
        }
        else{
            alert('Failed to update');
        }






    }
    return (
        <>
            <form action={update}>
                <div className='mb-6 text-xl flex'>
                    <div className='font-extrabold'>Delivered :</div>
                    <div className='ml-2 '>
                        <input type="checkbox" name="delivered" defaultChecked={datas?.Delivered} className='w-4 h-4 rounded-2xl' />
                    </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-violet-900 text-white rounded">Update delivery Status</button>
            </form>
        </>
    )
}
