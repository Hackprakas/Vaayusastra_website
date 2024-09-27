import Sidebar from '@/app/components/sidebar';
import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { updateDeliveryStatus } from '../../../../actions/route6'
import Updatedelivery from '@/app/components/updatedelivery';

interface PageProps {
  params: {
    id: string;
  };
}



export default async function OrderDetails({ params }: PageProps) {
  if (params.id.length !== 24) {
    return (<div>404 not found</div>);
  }

  const data = await prisma.orders.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    return (<div>404 not found</div>);
  }

  

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 overflow-auto">
        <div className="ml-4 p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">Order Details for Order ID: {data?.orderid}</h2>
          <div className='py-8'>
            <div className='border border-n-6 p-8 rounded-2xl text-n-3 w-full'>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Order_Id :</div>
                <div className='ml-2'>{data?.orderid}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Product Name :</div>
                <div className='ml-2'>{data?.ProductName}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Customer_Name :</div>
                <div className='ml-2'>{data?.customer_name}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Product Price :</div>
                <div className='ml-2'>{data?.amount.toString()}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Quantity Purchased :</div>
                <div className='ml-2'>{data?.Quantity}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Amount Paid :</div>
                <div className='ml-2'>{data?.amount.toString()}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Address :</div>
                <div className='ml-2'>{data?.Address}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Country :</div>
                <div className='ml-2'>{data?.Country}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Email :</div>
                <div className='ml-2'>{data?.Email}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Phone_No :</div>
                <div className='ml-2'>{data?.Phone_No}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>State :</div>
                <div className='ml-2'>{data?.State}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Zip_Code :</div>
                <div className='ml-2'>{data?.Zip_Code}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Status :</div>
                <div className='ml-2'>{data?.status}</div>
              </div>
              <div className='mb-6 text-xl flex'>
                <div className='font-extrabold'>Ordered Date :</div>
                <div className='ml-2'>{data?.OrderedDate.toString().slice(0, 10)}  {data?.OrderedDate.getFullYear()}</div>
              </div>
         <Updatedelivery params={params} datas={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
