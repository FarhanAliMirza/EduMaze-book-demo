import React, { useState } from "react";

const AddBanner = () => {
  const [add, setAdd] = useState(true);
  const removeAddHandler = () => {
    setAdd(false);
  };
  let box = "";
  if (add) {
    box = (
      <div
        id="marketing-banner"
        tabindex="-1"
        class="flex flex-col md:flex-row justify-between mt-3 p-4 w-5/6 opacity-75 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6"
      >
        <div class="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-2"
              alt="Flowbite Logo"
            />
            <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Build websites even faster with components on top of Tailwind CSS
          </p>
        </div>
        <div class="flex items-center flex-shrink-0">
          <button
            onClick={removeAddHandler}
            class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    );
  } else {
    box = "";
  }
  return <div className="flex justify-around">{box}</div>;
};

export default AddBanner;
