import React from "react";
import Image from "next/image";
import image from "../components/assets/4-small.png";
import TagLine from "../components/Tagline";
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";
import google from "../../public/google3.png";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { navigation } from "../constants";

export default function Page() {
  return (
    <>
      <div>
        <Navbar data={navigation} />
        
          <div className="flex flex-col lg:flex-row h-screen justify-center  lg:justify-center xl:justify-between items-center px-6 lg:px-64 ">
            <div className="flex justify-center items-center  w-full lg:w-auto lg:mt-40 xl:mt-0">
              <div className="flex flex-col items-center bg-conic-gradient p-0.25 min-w-[300px] max-w-[400px] lg:min-w-[400px] lg:max-w-[500px] rounded-[2.5rem] my-36">
                <div className="p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden w-full ">
                  <div className="absolute top-0 left-0 max-w-full"></div>
                  <div>
                    <div className="flex items-center justify-center w-full mb-6">
                      <Image src={vslogo} width={100} height={100} alt="logo" />
                    </div>
                    <h4 className="h4 mb-4 font-extrabold text-center">
                      Login
                    </h4>
                    <div className="flex flex-col space-y-2">
                      <button className="bg-gray-800 rounded-lg flex items-center w-full text-left p-2">
                        <Image
                          src={google}
                          width={30}
                          height={30}
                          alt="google"
                        />
                        <p className="m-1">Google</p>
                      </button>
                      <p className="font-extrabold text-center">or</p>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="text-gray-900 bg-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border bg-gray-800 border-gray-300 rounded focus:ring-3 focus:ring-primary-300"
                                required
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="remember"
                                className="text-gray-500 dark:text-gray-300"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Sign in
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet?{" "}
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden  md:hidden lg:hidden  xl:block justify-end lg:w-auto">
              <Image
                src={image}
                alt="loginlogo"
                className="mb-8"
                width={300}
                height={300}
              />
              <h4 className="font-extrabold h5 text-center">
                Authentication Redefined
              </h4>
            </div>
          </div>
          <Footer />
        </div>
     
    </>
  );
}
