import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "./assets";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



const About = () => {
  // <Section className="overflow-hidden" id="roadmap">
  //   <div className="container md:pb-10">
  //     <Heading tag="Ready to get started" title="Who We Are" />

  //     <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
  //       {roadmap.map((item: RoadmapItem) => {


  //         return (
  //           <div
  //             className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
  //               item.colorful ? "bg-conic-gradient" : "bg-n-6"
  //             }`}
  //             key={item.id}
  //           >
  //             <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden w-full xl:p-15">
  //               <div className="absolute top-0 left-0 max-w-full">
  //                 <Image
  //                   className="w-full"
  //                   src={grid}
  //                   width={550}
  //                   height={550}
  //                   alt="Grid"
  //                 />
  //               </div>
  //               <div className="relative z-1">
  //                 <div className="flex items-center justify-between w-full mb-8 md:mb-20">
  //                   <Tagline>{item.date}</Tagline>

  //                   <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
  //                   </div>
  //                 {item.imageUrl &&(<Image className="w-32 h-32 p-1 rounded-full bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" src={item.imageUrl} alt="Bordered avatar"/>)}  
  //                 </div>


  //                 <h4 className="h4 mb-4">{item.title}</h4>
  //                 <p className="body-2 text-n-4">{item.text}</p>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}

  //       <Gradient />
  //     </div>
  //     <div className="flex justify-center w-full mt-6 md:mt-8 xl:mt-10">
  //       <Link href="/calculator">
  //       <Button white >
  //         <div className="flex justify-center items-center gap-2">
  //           SpaceTools
  //           <ArrowRight size={24} />
  //         </div>
  //       </Button>
  //       </Link>
  //     </div>

  //   </div>

  // </Section>
  return (
    <>
      <Section className="overflow-hidden" id="roadmap">
        <div className="flex flex-col justify-center items-center">
          <Heading className="text-center mx-auto"tag="Ready to get started" title="Who We Are" />
          <div className="px-6 md:px-14 lg:px-16" > 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-6 md:space-x-4 space-y-6 lg:space-y-4 md:space-y-4 ">
            {roadmap.map((item) => (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden w-full xl:p-15">
                  <div className="absolute top-0 left-0 w-full object-cover">
                    <Image
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between w-full mb-8 md:mb-20 space-x-6">
                      <Tagline>{item.date}</Tagline>
                      {item.imageUrl && (
                        <Image
                          className=" p-1 rounded-full bg-blend-normal ring-2 ring-gray-300 "
                          src={item.imageUrl}
                          height={100}
                          width={100}
                          alt="Bordered avatar"
                        />
                      )}
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          <Gradient />
        </div>
          <div className="flex justify-center w-full mt-24 lg:mt-40 md:mt-32">
            <Link href="/calculator">
              <Button white>
                <div className="flex justify-center items-center gap-2">
                  SpaceTools
                  <ArrowRight size={24} />
                </div>
              </Button>
            </Link>
          </div>
      </Section>
    </>
  );
};  

export default About;
