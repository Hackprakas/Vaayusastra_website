import Button from '@/app/components/Button';
import React from 'react';
import Footer from "../../components/Footer";
import Navbar from '@/app/components/navbar';
import { navigation } from "../../constants";
import Section from "../../components/Section"

export default function Page() {
  return (
    <div>
        <Navbar position={true} data={navigation} hide={true} />
        <Section>
      <section className=" py-8 antialiased md:py-16">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cart
              </span>
            </li>

            <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Checkout
              </span>
            </li>

            <li className="flex shrink-0 items-center">
              <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Order summary
            </li>
          </ol>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your name*</label>
                    <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder='Enter Name'  required />
                  </div>

                  <div>
                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email*</label>
                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@gmail.com" required />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white">Country*</label>
                    </div>
                    <select id="select-country-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option selected>India</option>
                      <option value="AS">Australia</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white">State*</label>
                    </div>
                    <select id="select-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option selected>Tamil Nadu</option>
                      <option value="AP">Andra Pradesh</option>
                      <option value="KL">Kerala</option>
                      <option value="KA">Karnataka</option>
                      <option value="TL">Telangana</option>
                      <option value="PY">Pondicherry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number*</label>
                    <div className="flex items-center">
                      <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                       
                        +91
                        
                        <svg className="ms-1.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div id="dropdown-phone-3" className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button-3">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+44</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+49</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+97</a>
                          </li>
                        </ul>
                      </div>
                      <input type="number" id="phone-input-3" className="rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="1234567890" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="text" id="address" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter Address" required />
                  </div>

                  <div>
                    <label htmlFor="zipcode" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Pin Code</label>
                    <input type="text" id="zipcode" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="XXXXXX" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Billing Address</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start">
                    <input id="billing-same" type="checkbox" value="" className="mt-1.5 me-3 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-3 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-500" />
                    <label htmlFor="billing-same" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Same as delivery address</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="billing_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Billing name</label>
                    <input type="text" id="billing_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter Name" required />
                  </div>

                  <div>
                    <label htmlFor="billing_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Billing email*</label>
                    <input type="email" id="billing_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@gmail.com" required />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-billing-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white">Country*</label>
                    </div>
                    <select id="select-billing-country-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option selected>India</option>
                      <option value="AS">Australia</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label htmlFor="select-billing-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white">City*</label>
                    </div>
                    <select id="select-billing-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option selected>Tamil Nadu</option>
                      <option value="AP">Andra Pradesh</option>
                      <option value="KL">Kerala</option>
                      <option value="KA">Karnataka</option>
                      <option value="TL">Telangana</option>
                      <option value="PY">Pondicherry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="billing_address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Billing Address</label>
                    <input type="text" id="billing_address" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter Address" required />
                  </div>

                  <div>
                    <label htmlFor="billing_zipcode" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Billing Pin Code</label>
                    <input type="text" id="billing_zipcode" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="XXXXXX" required />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-md">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h2>

                <div className="mt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Subtotal</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Rs.180.00</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Shipping</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Rs.10.00</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Tax (estimated)</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Rs.10.00</span>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-600 pt-4">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Rs.200.00</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button white className="w-full py-3 px-4 bg-primary-500  font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-colors dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-400">
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      </Section>
      <Footer />
    </div>
  );
}

