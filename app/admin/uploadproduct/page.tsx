
import { ArrowRight } from 'lucide-react';
import Sidebar from '@/app/components/sidebar';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/navbar';
import { adminNavigation } from '@/app/constants';
import { uploadproduct } from '@/actions/route7';
import Loadingbtn from '@/app/components/loading';


export default function Page() {
 
  
  return (
    <>
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="block md:hidden lg:hidden">
          <Navbar data={adminNavigation} position={true} hide={true} admin={false} />
        </div>

        <div className='flex justify-center mt-24 md:mt-0 lg:mt-0 px-6 w-full h-[calc(100vh-1rem)] overflow-auto '>
          <div className='py-10'>

          
        <div className="bg-conic-gradient p-0.25 rounded-2xl flex-1">
              <div className="flex flex-col p-12 h-full lg:p-8 border border-n-6 bg-n-8 rounded-2xl overflow-y-auto">
                <div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                    Add Product
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <form className="space-y-10" action={uploadproduct}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-3"
                          placeholder="Enter Product Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-2.5"
                          placeholder="Enter Description"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-2.5"
                          placeholder="Enter price"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="stock"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Stock
                        </label>
                        <input
                          type="number"
                          name="stock"
                          id="stock"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-2.5"
                          placeholder="Enter stock"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">
                          Upload Main Image
                        </label>
                        <input className="block w-full text-sm text-white  rounded-lg cursor-pointer bg-gray-800 p-2.5" id="multiple_files" type="file" name="main" />
                      </div>
                      <div>

                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">Upload Additional Images</label>
                        <input className="block w-full text-sm text-gray-white p-2.5 bg-gray-800 rounded-lg" id="multiple_files" type="file" multiple name="additionalImages" />

                      </div>
                      <div className='flex w-full justify-center'>

                       <Loadingbtn content='Add Product'/>
</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
