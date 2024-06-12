import React from "react";
import { grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";
import { cards } from "../constants/index";
import Navbar from "../components/navbar";
import { navigation } from "../constants";
import Section from "../components/Section";

function Recognitions() {
  return (
    // <>
    //   <Header data={navigation} position={false} hide={true}/>
    //   <div className="flex justify-center">

    //   <h4 className="h4 pt-32">Recognitions</h4>
    //   </div>
    //   <div className="flex flex-col items-center px-14 pt-10 ">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {cards.map((card) => (
    //         <div key={card.id} className="w-78 h-78 bg-black rounded-lg overflow-hidden border border-n-6">
    //           <div className="relative w-full h-full">
    //             <Image
    //               className="w-full h-full object-cover"
    //               src={card.image}
    //               alt={card.text}
    //             />
    //             <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black bg-opacity-50">
    //               <p className="text-white text-xs">{card.text}</p>
    //               <Tagline className="text-white text-xs">Abc</Tagline>
    //               <h4 className="h4 mb-2 text-white"></h4>
    //               <p className="body-2  text-white">77f7f6d6rd</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <Gradient />
    //     <div className="flex justify-center mt-8">
    //       <Button white href="#">
    //         Go Back
    //       </Button>
    //     </div>
    //   </div>
    // </>
    <>
    <Navbar data={navigation} position={true} hide={true}/>
    <Section> 
    <div className="bg-n-8 flex flex-col items-center px-2 mt-20 lg:mt-10">
  <h1 className="text-3xl font-bold text-white mb-8">Recognitions</h1>
  <div className="p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
    {cards.map((card) => (
      <div key={card.id} className="rounded-lg">
        <div className="relative border border-n-6 rounded-lg mb-14 p-4">
          <div className="flex flex-col items-center space-y-14 mt-6">
            <div className="mt-8 font-extrabold text-center translate-y-[-30px]">{card.text}</div>
            <Image 
              className="w-64 h-64 z-5 p-1 rounded-sm translate-y-[-60px] bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" 
              src={card.image} 
              alt="Bordered avatar" 
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</Section>

    </>
  );
}

export default Recognitions;
