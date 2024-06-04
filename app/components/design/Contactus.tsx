"use client"
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import Button from '../Button';

function Contactus() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <button className = "bg- rounded-lg" onClick={toggleModal} >
      
      <MessageCircle />
    </button>

    {isOpen && (
      <div id="authentication-modal z-1"  aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="relative  w-full max-w-md max-h-full">
          <div className="relative bg-n-6 rounded-lg  ">
            <div className="flex items-center justify-between mt-2 md:p-5 rounded-md">
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
            <div className="p-4 md:p-5">
              <form className="space-y-4 p-2" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text--900 dark:text-white">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="name@company.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Message</label>
                  <textarea 
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"
                  />
                </div>
                <div className='gap-2'>
                <button 
                  type="submit" 
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
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