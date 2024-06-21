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

export default function page() {
  const [choice, setChoice] = useState("Google");
  const { data: session , status } = useSession();
  const [loading, setLoading] = useState(true);
  console.log(choice)


  useEffect(() => {
    if (status == "authenticated") {
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
      <div className="overflow-auto">
        <Navbar data={adminNavigation} position={true} hide={true} admin={false} />
        <Section>
          <div className=''>
          <div className="flex justify-center lg:space-x-28  px-9 md:px-2 xl:px-48 lg:px-36 py-32 md:py-12 lg:py-14">

            <div className=" bg-conic-gradient p-0.25 rounded-2xl">
              <div className="flex flex-col p-12 lg:p-8 max-w-[600px] flex-1 border border-n-6  bg-n-8 rounded-2xl">
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
                      <form className="space-y-10 " action={addemailuser} >
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
                            className="bg-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                      <form className="space-y-10 " action={addgmailuser} >
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
        </Section>
        <Footer />
      </div>
    </>
  )
}
