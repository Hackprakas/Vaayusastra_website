"use client";
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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  { useRef } from "react";


function Testimonials() {
  
  // let sliderRef = useRef<Slider | null>(null);
  // const play = () => {
  //   if (sliderRef.current && sliderRef.current.slickPlay) {
  //     sliderRef.current.slickPlay();
  //   }
  // };

  // const pause = () => {
  //   if (sliderRef.current && sliderRef.current.slickPause) {
  //     sliderRef.current.slickPause();
  //   }
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay : true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (<>
  <Section>

  <div className="flex justify-center mb-7">

      <h4 className="h4">Testimonials</h4>
  </div>
    {/* <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full"> */}
  <Slider className="px-6 md:px-16 lg:px-16 "  {...settings}>
      {testmon.map((card) => (
        
        <div key={card.id} className="rounded-lg ">
         
          <div className="relative border border-n-6  rounded-lg mb-14 px-2">
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

    </Slider>
    <div className="flex justify-center w-full ">
        <Button white href="#">
          Go Back
        </Button>
      </div>
    {/* </div> */}
  </Section>
    </>
  );
}

export default Testimonials;
