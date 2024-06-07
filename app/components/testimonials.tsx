import React from "react";
import { check2, grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";
import { roadmap } from "../constants";
import { Quote } from 'lucide-react';
import { testmon } from "../constants";
import Section from "./Section";



function Testimonials() {
  

  return (<>
  <Section>

  <div className="flex justify-center mb-7">

      <h4 className="h4">Testimonials</h4>
  </div>
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
      
      {testmon.map((card) => (
        
        <div key={card.id} className="rounded-lg ">
         
          <div className="relative border border-n-6 rounded-lg mb-14">
            <div className="flex justify-center">

          <Image className="w-32 h-32 z-5 p-1 rounded-full translate-y-[-60px]  bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" src={card.image} alt="Bordered avatar"/>
            </div>
            <div className="flex flex-col items-center">

            <div className="mt-[-30px] font-extrabold text-center">{card.name}</div>
            <div className="text-center">{card.designation}</div>
            <div className="mb-10 text-center">{card.company}</div>

            <div className="bg-purple-700 h-10 w-10 rounded-full flex justify-center items-center mb-8">
            <Quote />
            </div>
            <div className="p-4 text-n-4">
             {card.text}

            </div>
            </div>
          </div>
        </div>
      ))}
      <Gradient />
      <div className="flex justify-center w-full mt-6 md:mt-8 xl:mt-10">
        <Button white href="#">
          Go Back
        </Button>
      </div>
    </div>
  </Section>
    </>
  );
}

export default Testimonials;
