"use client"
import React, { useState } from "react";
import Image from "next/image";
import image from "../components/assets/4-small.png";
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";
import google from "../../public/google3.png";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { navigation } from "../constants";
import { signIn } from 'next-auth/react';
import Section from "../components/Section";
import Button from "../components/Button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session ,status} = useSession();
  const [loading, setLoading] = useState(false);
  async function handleSignin() {
    await signIn("google", {
      redirect: false,
      callbackUrl: "/admin",
    });
  }
  
   async function handlelogin(
    formdata: FormData
  ) {
    try {
      setLoading(true);
      const email = formdata.get("email");
      const password = formdata.get("password");
       await signIn("credentials", { email: email, password: password, callbackUrl: "/admin" });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  
  }
  return (
    <>
      <div className="overflow-auto">
        <Navbar data={navigation} position={true} hide={true} admin={false} />
        <Section>
          <div className="flex justify-center lg:space-x-28 md:justify-center lg:justify-between px-9 md:px-2 xl:px-48 lg:px-36 py-24 md:py-18 lg:py-12">

            <div className=" bg-conic-gradient p-0.25 rounded-2xl w-[400px] ">
              <div className="flex flex-col p-12 max-w-[800px] flex-1 border border-n-6  bg-n-8 rounded-2xl">
                <div>
                  <div className="flex items-center justify-center w-full mb-6">
                    <Image src={vslogo} width={100} height={100} alt="logo" />
                  </div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                    Login
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <form action={handleSignin} >

                      <button className="bg-gray-800 rounded-lg flex items-center w-full text-left p-2"  >
                        <Image
                          src={google}
                          width={30}
                          height={30}
                          alt="google"
                        />
                        <p className="m-1">Google</p>
                      </button>
                    </form>
                    <p className="font-extrabold text-center">or</p>
                    <form className="space-y-4 md:space-y-6" action={handlelogin} >
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
                          className="bg-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                          className="text-white bg-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-start">


                        </div>
                        <Link
                          href="/forgotpass"
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Button white
                        className="w-full text-black"

                      >
                        {loading ? ("signing in") : "Sign in"}
                      </Button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden lg:flex flex-col justify-center items-center  ">
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
        </Section>
        <Footer />
      </div>
    </>
  );
}
