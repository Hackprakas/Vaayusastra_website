import React from "react";
import { benefits, navigation } from "../constants";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../components/assets/svg/Arrow";
import GradientLight from "../components/design/Course";
import ClipPath from "../components/assets/svg/ClipPath";
import Image from "next/image";
import Link from "next/link";
import { Papers } from "../constants";
import {grid}from "../components/assets"
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Course: React.FC = () => {
  return (
    
    <>
    <div>
    {/* <Navbar data={navigation} position={true} hide={true}/> */}
    {/* <Section id="features"> */}
      <div className="mt-20"> 

      <div className="container relative z-2">
        <Heading
          className="text-center mx-auto md:max-w-md lg:max-w-2xl font-bold "
          title="Papers & Articles"
          />
<div className="px-4 lg:px-1 md:px-2">
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mb-10">
          {Papers.map((item) => (
              <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  key={item.id}
                  >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    />
                  <a href={item.url}>
                    <div className="flex">

                   
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Learn more
                  </p>
                  <Arrow />
                  </div>
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
                >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                      <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      />
                      )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    {/* </Section> */}
    <Footer/>
                      </div> 
    </>
  );
};

export default Course;
