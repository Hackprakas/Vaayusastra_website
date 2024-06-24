"use client"
import Button from '@/app/components/Button'
import Footer from '@/app/components/Footer'
import Section from '@/app/components/Section'
import Navbar from '@/app/components/navbar'
import { adminNavigation } from '@/app/constants'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { addemailuser, addgmailuser } from '@/actions/route2'
import { useSession } from 'next-auth/react'
import Notfound from '@/app/components/notfound'
import { useEffect } from 'react'
import Loader from '@/app/components/Loader'
import Sidebar from '@/app/components/sidebar'


export default function page() {
  const [choice, setChoice] = useState("Google");
  const { data: session , status } = useSession();
  const [loading, setLoading] = useState(true);
  console.log(choice)

  async function addgmailadmin(formdata:FormData){
    const check=await addgmailuser(formdata);
    if (check?.error){
     alert(check.error);
  }
  else if(check?.message){
    alert(check.message);
  }
  }
  async function addemailadmin(formdata:FormData){
    const check=await addemailuser(formdata);
    if (check?.error){
     alert(check.error);
  }
  else if(check?.message){
    alert(check.message);
  }
  }


  useEffect(() => {
    if (status == "authenticated") {
      setLoading(false);
    }
    else if(!session){
      setLoading(false);
    }
  }, [status]);

  console.log(choice);

  if (loading) {
    return <div>
      <Loader />
    </div>; 
  }

  if (!session) {
    return (

      <div>
      <Notfound />
      </div>
    )
  }
 
  return (
    <>
      <div className="overflow-auto flex">
        <Sidebar/>
      <div className='block md:hidden lg:hidden'>

        <Navbar data={adminNavigation} position={true} hide={true} admin={false} />
      </div>
        
          <div className='flex justify-center items-center w-full'>
          <div className="flex justify-center items-center  w-[500px] md:w-full lg:w-[750px]  px-9 md:px-32 xl:px-48 lg:px-72 py-32 md:py-12 lg:py-14">

            <div className=" bg-conic-gradient p-0.25 rounded-2xl flex-1   ">
              <div className="flex flex-col p-12 h-full lg:p-8  border border-n-6  bg-n-8 rounded-2xl">
                <div>
                  <div className="flex items-center justify-center w-full mb-6">
                    {/* <Image src={vslogo} width={100} height={100} alt="logo" /> */}
                  </div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                    Add Admin
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <form action="">
                      <div>
                        <label
                          htmlFor="Email"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Authentication type
                        </label>
                        <select id="answer" name="answer" className='bg-gray-800 text-white sm:text-sm rounded-lg  block w-full p-3' onChange={(e)=>setChoice(e.currentTarget.value)}>
                        <option value="Choose"   >Choose an option</option>
                          <option value="Google" >Google</option>
                          <option value="Email" >Email and Password</option>
                        </select>
                      </div>
                    </form>

                    {choice === "Email" ? (
                      <form className="space-y-10 " action={addemailadmin} >
                        <div>
                          <label
                            htmlFor="Name"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-800 text-white sm:text-sm rounded-lg  block w-full p-3"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Email"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-800 text-white sm:text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Password"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="bg-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Conform Password"
                            required
                          />
                        </div>


                        <Button white
                          className="w-full  text-black"
                        >
                          <div className='flex justify-center items-center'>

                          Add User
                            <ArrowRight size={20} className="ml-2" />
                          </div>
                        </Button>

                      </form>
                    ) :(choice==="Google")&&(
                      <form className="space-y-10 " action={addgmailadmin} >
                        <div>
                          <label
                            htmlFor="Name"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="emails"
                            className="bg-gray-800 text-white sm:text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Enter the email"
                            required
                          />
                        </div>
                        <Button white
                          className="w-full  text-black"
                        >
                          <div className='flex justify-center items-center'>

                            Add User
                            <ArrowRight size={20} className="ml-2" />
                          </div>
                        </Button>
                      </form>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        
      </div>
        
    </>
  )
}
