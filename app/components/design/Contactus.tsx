"use client"
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import Button from '../Button';
import { sendemail } from '../../../actions/route1';

function Contactus() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className='fixed bottom-0 right-4 transform -translate-y-1/2 z-100'> 
    <button className = "bg-purple-700 rounded-md p-4" onClick={toggleModal} >

      
      <MessageCircle color='white'/>
    </button>
    </div>

    {isOpen && (
      <div id="authentication-modal z-1"  aria-hidden="true" className="shadow-md fixed px-4 inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden duration-300 ">
        <div className="relative  w-full max-w-md max-h-full">
          <div className="relative bg-n-7 rounded-lg  ">
            <div className="flex items-center justify-between px-8 pt-8 rounded-md">
              <h3 className="text-xl font-semibold text-white">
                Contact us
              </h3>
              <button 
                type="button" 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" 
                onClick={toggleModal}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-4 md:p-5">
              <form className="space-y-6 p-2 ml-2  md:ml-1 lg:ml-1" action={sendemail}>
                <div>
                  <label htmlFor="email" className="block mb-2 mt-3 md:mt-0 lg:mt-0 text-sm font-medium ">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-800  text-white text-sm rounded-lg block w-full p-2.5" 
                    placeholder="name@company.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="name"  className="block mb-2 mt-3 md:mt-0 lg:mt-0 text-sm font-medium ">Name</label>
                  <input 
                    type="name" 
                    name="name" 
                    id="name" 
                    className="bg-gray-800  text-white text-sm rounded-lg block w-full p-2.5" 
                    placeholder="Your Name"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Message</label>
                  <textarea 
                  name='message'
                  className="block p-2.5 w-full text-sm text-white bg-gray-800 rounded-lg border border-gray-800 " placeholder="Write your suggestions here"
                  />
                </div>
                <div className='gap-2 flex justify-center mb-1'>
                <Button  white>
                  Submit
                </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Contactus