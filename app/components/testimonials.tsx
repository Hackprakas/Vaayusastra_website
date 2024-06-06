import React from "react";
import { check2, grid } from "../components/assets";
import Button from "../components/Button";
import Tagline from "../components/Tagline";
import { Gradient } from "../components/design/Roadmap";
import Image from "next/image";


function Testimonials() {
  const cards = [
    { id: 1, image: grid, text: "Kids have a beautiful mind. What they see and hear can inspire them I a very different way. Every child can imagine things with uniqueness. It is very easy to inspire and motivate them to find their dreams through Vaayusastra's teaching model. Let it be practical model, ancient history, fun activities and VAAYUSASTRA CAN DO IT."},
    { id: 2, image: grid, text: "When I was little I so wished subjects were as interesting as watching a movie, the fact that Vaayusastra uses arts to teach science is almost like a wish come true to people like me. This method will bring both the scientist and artist in a kid. I am so happy that kids this generation are given an opportunity to experience science " },
    { id: 3, image: grid, text: "Aviation has a special place for itself in the emerging courses. Our Vaayusastra gives such a study in a very beautiful form in the form of drama. This quality educational system is in the form of a play by the best trainers to make it easy for children to understand. They have been doing this endeavor for the last 2 years with excellent teaching skills" },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="rounded-lg overflow-hidden">
          <div className="relative border border-n-6 rounded-lg">
            <Image
              className="w-full h-full object-cover"
              src={card.image}
              alt={`Card ${card.id}`}
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center px-2 py-1 bg-white rounded-full">
                  {/* <Image
                    className="mr-1"
                    src={check2}
                    width={12}
                    height={12}
                    alt="Check"
                  /> */}
                </div>
              </div>
              <div>
                <p className="text-white text-xs">{card.text}</p>
                <Tagline className="text-white text-xs">TESTIMONIAL</Tagline>
              </div>
              <h4 className="h4 mb-2 text-white"></h4>
              <p className="body-2 text-n-4 text-white">Founding member Vaayusastra Aerospace</p>
            </div>
          </div>
        </div>
      ))}
      <Gradient />
      <div className="flex justify-center w-screen mt-6 md:mt-8 xl:mt-10">
        <Button white href="#">
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Testimonials;
