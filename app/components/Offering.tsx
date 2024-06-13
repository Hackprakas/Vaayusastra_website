import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, grid } from "./assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Gradient } from "./design/Services";
import Image from "next/image";

const Offering: React.FC = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          className="text-center mx-auto"
          title="How Vaayusastra Aerospace Works"
          text="Vaayusastra unlocks the potential of Space"
        />
        <div className="bg-conic-gradient p-0.5 rounded-3xl">
          <div className="z-3">
            <div className="relative z-1 flex h-[39rem] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[56rem] bg-n-8">
              <div className="absolute top-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                {/* <Image
                  className="w-full h-full object-cover blur-3xl md:object-right"
                  width={800}
                  alt="Smartest AI"
                  height={730}
                  src={service1}
                /> */}
              </div>
              <div className="absolute top-0 left-0 max-w-full">
                <Image
                  className="object-cover"
                  src={grid}
                  width={1300}
                  height={1300}
                  alt="Grid"
                />
              </div>
              <div className="relative bg-transparent z-2 space-y-10 rounded-3xl p-4 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <h2 className="h4">What Vaayusastra does?</h2>
                <p className="body-2 mt-4 text-zinc-400 text-lg">
                  1. Basic Science rooted to Aeronautics, Aerospace along hands-on science model making activities embedded in mythological sci-fi stories, with theatrical enactments for school children as per NCERT, CBSE, ICSE & NASA curriculum.<br /><br />
                  2. An integrated and Hands-on training/Internship program for college students under various electives segregated by Earth's atmospheric altitude. Vimaan (0km-12km), Agni (12km-160km), Akaash (160km and above), Adhisaya Parimana (3D printing technology), Vaayu (Basic Aerodynamics)
                </p>
                <h3 className="h4">What are those students doing about it now?</h3>
                <p className="body-2 mt-4 text-zinc-400 text-lg">
                  1. They find an online / offline shop and buy DIY Physical models to practice in home,<br /><br />
                  2. Visit planetariums, Science Exhibitions etc.,<br /><br />
                  3. They get a specialised short span training program like building advanced level Aero models or workshops<br /><br />
                  4.Other piecemeal activities which are not integrated or customised for children or college students knowledge level.<br /><br />
                </p>
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Offering;
