import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center my-4">
      <div class="flex flex-col items-center coloredbg border border-gray-900 rounded-lg w-10/12 sm:w-8/12 my-4 drop-shadow-md hover:drop-shadow-2xl ">
        <div class="p-1 mb-2 bg-gray-400 rounded-b-md">Hello world</div>
        <div class="flex flex-row items-center">
          <img
            class="object-cover w-full  h-96 md:h-auto md:w-48 "
            src={props.image}
            alt="Aisehi"
          />
          <div class="flex flex-col text-center justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.heading}
            </h5>
            <p class="mb-3 font-normal text-gray-500">{props.content}</p>
          </div>
          <img
            class="object-cover w-full  h-96 md:h-auto md:w-48 "
            src={props.image}
            alt="Aisehi"
          />
          <div class="flex flex-col text-center justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.heading}
            </h5>
            <p class="mb-3 font-normal text-gray-500">{props.content}</p>
          </div>
        </div>
        <button>Click me</button>
      </div>
    </div>
  );
};

export default Card;
