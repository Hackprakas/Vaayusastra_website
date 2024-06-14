import React from "react";
import { check2, grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";
import { roadmap } from "../constants";
import { Quote } from 'lucide-react';
import { testmon } from "../constants";
import Section from "../components/Section";
import Navbar from "../components/navbar";
import {navigation} from "../constants"
import Footer from "../components/Footer";
import {hindu} from "../constants"
function Testimonials() {
  

  return (
    <>
<div>
 <Navbar data={navigation} position={true} hide={true}/>
  
  <Section>

  <div className="flex justify-center mb-7 mt-24  lg:mt-12">

      <h4 className="h4">Hindu Young World</h4>
  </div>
    <div className=" m-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 space-y-2 ">
      
      {hindu.map((card) => (
        <div key={card.id} className="rounded-lg ">
         
          <div className="relative border border-n-6 rounded-lg mb-14 px-2">
            <div className="flex justify-center">

          <Image className="w-32 h-32 z-5 p-1 rounded-full translate-y-[-60px]  bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" src={card.image} alt="Bordered avatar"/>
            </div>
            <div className="flex flex-col items-center">

            <div className="mt-[-30px] font-extrabold text-center">{card.name}</div>
            <div className="text-center">{card.title}</div>
            <div className="mb-10 text-center p-4 text-n-4">{card.text}</div>

            <div className="bg-purple-700 h-10 w-10 rounded-full flex justify-center items-center mb-8">
            <Button white href={card.url} >
                ReadMore 
            </Button>
            </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Gradient /> */}
    </div>
  </Section>
  <Footer />
</div>
    </>
  );
}

export default Testimonials;
