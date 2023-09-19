import React from "react";
import Typewriter from "typewriter-effect";
import InputForm from "./InputForm";
import bg from "../bgimg.png";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div className="justify-around items-center pt-10 pb-36 grid sm:grid-cols-3 grid-cols-1">
        <div className="text-left p-12 sm:m-12 col-span-2">
          <h1 className="text-white font-bold text-4xl sm:text-6xl sm:leading-relaxed">
            Ut Tellus Elementum Sagittis Vitae
          </h1>
          <div className="text-white mt-3 mr-12 text-lg">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Estplacerat in egestas erat."
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Estplacerat in egestas erat"
                  )
                  .start();
              }}
            />
          </div>
        </div>
        <div className="justify-center p-6 sm:py-6 mx-3 sm:mr-12 bg-white/20 rounded-3xl">
          <InputForm />
        </div>
      </div>
      <div className="absolute z-[-1] top-0 overflow-auto-y w-full">
        <img
          className="max-w-none sm:w-full opacity-5 sm:opacity-20"
          src={bg}
          alt="EduMaze"
        />
      </div>
    </div>
  );
};

export default Hero;
