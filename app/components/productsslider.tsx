"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Props {
    data:any;
}

export default function Productsslider({data}: Props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: false, // Ensure slides move from left to right
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <Slider {...settings}>
                {data?.addtionalimg.map((image:any) => (
                  <div>
                  <Image className="rounded-xl" src={image} alt="Product 1" height={400} width={400} />
                </div>))
                  }
               
              </Slider>
            </div>
  )
}
