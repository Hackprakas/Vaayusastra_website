import Sidebar from '@/app/components/sidebar';

export default function OrderDetails() {
  // Here you would typically fetch the order details using the id
  // For example, using useEffect to fetch data from an API
  // const [orderDetails, setOrderDetails] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex ">
        <div className="ml-4 p-6 bg-dark border-gray-200 ">
          <h2 className="text-2xl font-bold mb-6">Order Details for Order ID: 1</h2>
            <h3 className='mb-6 text-xl' >Id  : 1</h3> 
            <h3 className='mb-6 text-xl '>Order_id : 2134</h3>
            <h3 className='mb-6 text-xl'> Amount: 199</h3>
            <h3 className='mb-6 text-xl'>Status: Shipped</h3>
            <h3 className='mb-6 text-xl'>Customer_name : Priya</h3>
            <h3 className='mb-6 text-xl'>Email:abc@gmail.com</h3>
            <h3 className='mb-6 text-xl'>Phone_No: 8645725809</h3>
            <h3 className='mb-6 text-xl'>Country: India</h3>
            <h3 className='mb-6 text-xl'>State: Tamilnadu</h3>
            <h3 className='mb-6 text-xl'>Zip_Code:600005</h3>
            <h3 className='mb-6 text-xl'>Address: Nehru nagar, perugudi, chennai</h3>
        </div>
      </div>
    </div>
  );
}