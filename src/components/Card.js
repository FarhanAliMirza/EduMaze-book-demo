import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center my-4">
      <a
        href="#"
        class="flex flex-col items-center coloredbg border border-gray-900 rounded-lg md:flex-row w-10/12 sm:w-8/12 my-4 drop-shadow-md hover:drop-shadow-2xl "
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.image}
          alt="Aisehi"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.heading}
          </h5>
          <p class="mb-3 font-normal text-gray-500">{props.content}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
