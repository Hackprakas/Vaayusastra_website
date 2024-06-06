import React from "react";
import { grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";

function Recognitions() {
  const cards = [
    { id: 1, image: grid, text: "ISRO" },
    { id: 2, image: grid, text: "CIAA & AIAASC" },
    { id: 3, image: grid, text: "LEAP-IIT IC" },
    { id: 4, image: grid, text: "NAAN MUDHALVAN-TNSDC" },
    { id: 5, image: grid, text: "KNOWLEDGE PARTNER-NITTTR" },
    { id: 6, image: grid, text: "KNOWLEDGE PARTNER-ICT ACADEMY" },
    { id: 7, image: grid, text: "DPIIT RECOGNISED STARTUP" },
    { id: 8, image: grid, text: "FIRST FRANCHISE IN BANGALORE" },
    { id: 9, image: grid, text: "HUMAN CENTRIC EMERGING" },
    { id: 10, image: grid, text: "IIT MADRAS IC & IIT MADRAS RTBI" },
    { id: 11, image: grid, text: "FORTNIGHT SERIES IN HINDU YOUNG WORLD" },
    { id: 12, image: grid, text: "VAAYUSASTRA-CENTER FOR EXCELLENCE" },
  ];

  return (
    <div className="flex flex-col p-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="w-78 h-78 bg-black rounded-lg overflow-hidden border border-n-6">
            <div className="relative w-full h-full">
              <Image
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.text}
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black bg-opacity-50">
                <p className="text-white text-xs">{card.text}</p>
                <Tagline className="text-white text-xs">Abc</Tagline>
                <h4 className="h4 mb-2 text-white"></h4>
                <p className="body-2 text-n-4 text-white">77f7f6d6rd</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Gradient />
      <div className="flex justify-center mt-8">
        <Button white href="#">
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Recognitions;
