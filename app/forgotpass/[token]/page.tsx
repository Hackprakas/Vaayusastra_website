"use client"
import Image from 'next/image'
import React from 'react'
import Section from '../../components/Section'
import Navbar from '../../components/navbar'
import { navigation } from '../../constants'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import { ArrowRight } from 'lucide-react'
import { NextPage } from 'next';
import { checktoken, resetpassword } from '@/actions/route3'
import Loadingbtn from '@/app/components/loading'

interface PageProps {
    params: {
      token: string; 
    };
  }

  const Page: NextPage<PageProps> = async({ params }) => {
    const data=new FormData();
    data.append('token',params.token);
    const check=await checktoken(data);
    if(!check){
      return <div>Invalid Token</div>
    }
    async function reset(formdata:FormData){
      
      const data=new FormData();
      data.append('newpassword',formdata.get('newpassword') as string);
      data.append('token',params.token);
      
      const reset=await resetpassword(data);
      if(reset?.error){
        alert("error"+reset?.error)
      }
      else if(reset?.message){
        alert(reset.message)
      }

    }

  return (
  <>
  <div className="overflow-auto">
        <Navbar data={navigation} position={true} hide={true} admin={false} />
        <Section>
          <div className="flex justify-center lg:space-x-28  px-9 md:px-2 xl:px-48 lg:px-36 py-24 md:py-12 lg:py-12">

            <div className=" bg-conic-gradient p-0.25 rounded-2xl">
              <div className="flex flex-col p-12 max-w-[600px] flex-1 border border-n-6  bg-n-8 rounded-2xl">
                <div>
                  <div className="flex items-center justify-center w-full mb-6">
                    {/* <Image src={vslogo} width={100} height={100} alt="logo" /> */}
                  </div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                   Reset Password
                  </h4>
                  <div className="flex flex-col space-y-2">
                    
                   
                    <form className="space-y-10 " action={reset} >
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your New Password
                        </label>
                        <input
                          type="password"
                          name="newpassword"
                          id="email"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg  block w-full p-2.5"
                          placeholder="Your New Password"
                          required
                        />
                        </div>
                        <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Conform Password
                        </label>
                        <input
                          type="password"
                          name="conformpassword"
                          id="email"
                          className="bg-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Conform Password"
                          required
                        />
                      </div>
                      
                      
                      <div className='flex w-full justify-center'>

                       <Loadingbtn content='Reset Password'/>
</div>
                      
                    </form>
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
export default Page;
