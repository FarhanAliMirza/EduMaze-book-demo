import React from "react";
import InputForm from "./InputForm";

const Hero = () => {
  return (
    <div className="justify-around py-10 grid sm:grid-cols-3 grid-cols-1 ">
      <div className="text-center text-black font-bold p-10 text-3xl col-span-2">
        Loreum Ipsum
      </div>
      <div className="justify-center p-6 sm:py-6 mx-3 sm:mr-12 bg-[#1f1f1f] rounded-3xl bg-opacity-5">
        <InputForm />
      </div>
    </div>
  );
};

export default Hero;
