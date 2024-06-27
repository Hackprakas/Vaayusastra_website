import React from "react";
import { check2, grid } from "./assets";
import Button from "./Button";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import { product, roadmap } from "../constants";
import prisma from "../lib/db";

import Section from "./Section";
import Heading from "./Heading";
import Link from "next/link";

async function Testimonials() {
  const products= await prisma.product.findMany();
  return (
    <>
      <div>
        <Section id="products">
          <div className="flex justify-center mb-7 mt-12">
            <Heading className="text-center mx-auto" tag="Igniting Innovation" title="Products" />
          </div>
          <div className="m-6 md:m-16 lg:m-16 xl:m-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 space-y-2">
            {products.map((card) => (
              <div key={card.id} className="rounded-lg">
                <div className="relative border border-n-6 rounded-lg mb-14 px-2">
                  <div className="flex justify-center">
                    <Image className=" z-5 p-1 rounded-full translate-y-[-60px] bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500"width={150} height={150} src={card.image} alt="Bordered avatar" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mt-[-30px] font-extrabold text-center">{card.name}</div>
                    <div className="mb-10 text-center p-4 text-n-4">{card.description}</div>
                    <div className="bg-purple-700 h-10 w-10 rounded-full flex justify-center items-center mb-8">
                        <Link href={`/${card.id}`}>
                      <Button white >
                          ReadMore
                      </Button>
                        </Link>
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
