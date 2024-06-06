import React from "react";
import { check2, grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";
import { roadmap } from "../constants";
import { Quote } from 'lucide-react';



function Testimonials() {
  const cards = [
    { id: 1, image: grid, text: "Kids have a beautiful mind. What they see and hear can inspire them I a very different way. Every child can imagine things with uniqueness. It is very easy to inspire and motivate them to find their dreams through Vaayusastra's teaching model. Let it be practical model, ancient history, fun activities and VAAYUSASTRA CAN DO IT.", name:"Abhi Dharshan",designation:"Pilot/Aeronautical engineer Founding member",company:"Vaayusastra Aerospace"},
    { id: 2, image: grid, text: "When I was little I so wished subjects were as interesting as watching a movie, the fact that Vaayusastra uses arts to teach science is almost like a wish come true to people like me. This method will bring both the scientist and artist in a kid. I am so happy that kids this generation are given an opportunity to experience science ",name:"Gayathri MS",designation:"  Founding Member",company:"Aerospace (PDM UniversityMilan, Italy)" },
    { id: 3, image: grid, text: "Aviation has a special place for itself in the emerging courses. Our Vaayusastra gives such a study in a very beautiful form in the form of drama. This quality educational system is in the form of a play by the best trainers to make it easy for children to understand. They have been doing this endeavor for the last 2 years with excellent teaching skills", name:"Nivash",designation:"Customer Agent",company:"AIAPSL Chennai International Airport"},
  ];

  return (
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      
      {cards.map((card) => (
        
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
            <div className="p-4">
             {card.text}

            </div>
            </div>
          </div>
        </div>
      ))}
      <Gradient />
      <div className="flex justify-center w-screen mt-6 md:mt-8 xl:mt-10">
        <Button white href="#">
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Testimonials;
