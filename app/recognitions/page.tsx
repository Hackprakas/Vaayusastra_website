import React from "react";
import { grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";
import { cards } from "../constants/index";
import Header from "../components/Navbar";
import { navigation } from "../constants";

function Recognitions() {
  return (
    <>
      <Header data={navigation} />
      <div className="flex justify-center">

      <h4 className="h4 pt-32">Recognitions</h4>
      </div>
      <div className="flex flex-col items-center px-14 pt-10 ">
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
    </>
  );
}

export default Recognitions;
