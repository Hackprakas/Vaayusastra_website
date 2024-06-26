import Sidebar from '@/app/components/sidebar';

export default function OrderDetails() {
  // Here you would typically fetch the order details using the id
  // For example, using useEffect to fetch data from an API
  // const [orderDetails, setOrderDetails] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1  overflow-auto ">
        <div className="ml-4 p-6  flex-1 ">
          <h2 className="text-2xl font-bold mb-2 ">Order Details for Order ID: 1</h2>
          <div className='py-8'>

          
          <div className='border border-n-6 p-8 rounded-2xl  text-n-3 w-full '>

         
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'> Order_Id :</div>
              <div className='ml-2'>1</div>
               </div> 
               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Product Name :</div>
              <div className='ml-2'>Dummy</div>
               </div>
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Customer_Name :</div>
              <div className='ml-2'>Priya</div>
               </div>
               
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Product Price :</div>
              <div className='ml-2'>199</div>
               </div>
               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Quantity Purchased :</div>
              <div className='ml-2'>1</div>
               </div>
               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Amount Paid :</div>
              <div className='ml-2'>199</div>
               </div>
              
                   
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Address :</div>
              <div className='ml-2'>Nehru nagar, perugudi, chennai</div>
               </div> 
               
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Country :</div>
              <div className='ml-2'>India</div>
               </div> 
                   
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Email :</div>
              <div className='ml-2'>abc@gmail.com</div>
               </div>
    
               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Phone_No :</div>
              <div className='ml-2'>7894561230</div>
               </div>
                   
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>State :</div>
              <div className='ml-2'>Tamilnadu</div>
               </div>
                   
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Zip_Code :</div>
              <div className='ml-2'>600005</div>
               </div>
                   
                   
            <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Status :</div>
              <div className='ml-2'>shipped</div>
               </div>

               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Delivered :</div>
              <div className='ml-2'>No</div>
               </div>

               <div className='mb-6 text-xl flex ' >
              <div className='font-extrabold'>Ordered Date :</div>
              <div className='ml-2'>12/3/2021</div>
               </div>

               
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}