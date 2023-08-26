import React, { useState } from "react";
import Card from "./Card";

const cards = [
  {
    index: 0,
    heading: "Hello World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat.",
    image:
      "https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg",
  },
  {
    index: 1,
    heading: "Hello World1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat.",
    image:
      "https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg",
  },
  {
    index: 2,
    heading: "Hello World2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat.",
    image:
      "https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg",
  },
  {
    index: 3,
    heading: "Hello World3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat.",
    image:
      "https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg",
  },
  {
    index: 4,
    heading: "Hello World4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat.",
    image:
      "https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let changeTo = 0;
  const changeSlideHandler = (id) => {
    setActiveIndex(id);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="">
      {cards.map((card, index) => (
        <div>
          {index === activeIndex && (
            <Card
              key={index}
              active={index === activeIndex}
              image={card.image}
              content={card.content}
              heading={card.heading}
            ></Card>
          )}
        </div>
      ))}
      <div className="flex justify-center my-5">
        {cards.map((card, index) => (
          <a
            className={classNames(
              index === activeIndex
                ? "bg-gray-900"
                : "bg-gray-200 hover:bg-gray-400 ",
              "w-3 h-3 mx-1 rounded-full"
            )}
            onClick={() => changeSlideHandler(index)}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
