"use client"
import React from 'react';
import Image from 'next/image';
import product1 from "../components/assets/products/product1.jpg";
import product2 from "../components/assets/products/product2.jpg";
import product3 from "../components/assets/products/product3.jpg";
import product4 from "../components/assets/products/product4.jpg";
import product5 from "../components/assets/products/product5.jpg";
import product6 from "../components/assets/products/product6.jpg";
import product7 from "../components/assets/products/product7.jpg";
import product8 from "../components/assets/products/product8.jpg";
import Navbar from '../components/navbar';
import { navigation } from '../constants';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Button from '../components/Button';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

export default function Page() {
  var settings = {
    dots: true,
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
    <>
      <Navbar data={navigation} position={true} hide={true} admin={false} />
      <Section>
        <div className="max-w-screen-xl px-16 py-24 md:py-16 lg:py-16 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <Slider {...settings}>
                <div>
                  <Image className="rounded-xl" src={product1} alt="Product 1" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product2} alt="Product 2" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product3} alt="Product 3" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product4} alt="Product 4" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product5} alt="Product 5" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product6} alt="Product 6" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product7} alt="Product 7" height={400} width={400} />
                </div>
                <div>
                  <Image className="rounded-xl" src={product8} alt="Product 8" height={400} width={400} />
                </div>
              </Slider>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white">
                Young Aeronauts Toy Glider
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-white sm:text-3xl dark:text-white">
                  Rs.199
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-none text-n-2">
                    (5.0)
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <Link href="/products/Checkout">
                <Button white>BuyNow</Button>
              </Link>
                <Link
                  href="/cart"
                  className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
               </Link>
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-n-2">
                The Young Aeronauts Toy Glider is an educational and fun toy designed to inspire young minds with an interest in aeronautics. Created by Vaayusastra Aerospace Pvt. Ltd., this glider features a sleek design and vibrant colors that attract children and adults alike.
              </p>

              <p className="text-n-2">
                Discover the joy of flight with our precision-engineered toy glider, it promises effortless soaring and stability. It's sleek design ensures hours of exhilarating fun for enthusiasts of all ages. Experience the thrill of flight with our exceptional toy glider today!
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}