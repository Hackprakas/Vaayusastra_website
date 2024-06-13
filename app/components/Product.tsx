import React from "react";
import { check2, grid } from "./assets";
import Button from "./Button";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import { product, roadmap } from "../constants";

import Section from "./Section";
import Heading from "./Heading";

function Testimonials() {
  return (
    <>
      <div>
        <Section>
          <div className="flex justify-center mb-7 mt-12">
            <Heading className="text-center mx-auto" tag="Igniting Innovation" title="Products" />
          </div>
          <div className="m-6 md:m-16 lg:m-16 xl:m-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 space-y-2">
            {product.map((card) => (
              <div key={card.id} className="rounded-lg">
                <div className="relative border border-n-6 rounded-lg mb-14 px-2">
                  <div className="flex justify-center">
                    <Image className="w-32 h-32 z-5 p-1 rounded-full translate-y-[-60px] bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" src={card.image} alt="Bordered avatar" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mt-[-30px] font-extrabold text-center">{card.name}</div>
                    <div className="mb-10 text-center p-4 text-n-4">{card.text}</div>
                    <div className="bg-purple-700 h-10 w-10 rounded-full flex justify-center items-center mb-8">
                      <Button white href={card.url}>
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

export default Testimonials;
