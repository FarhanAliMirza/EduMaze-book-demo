import React, { useState, useEffect } from "react";
import Card from "./Card";

const Carousel = ({ images, controls }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set the initial active index to the first image
    setActiveIndex(0);
  }, [images]);

  const handleClick = (index) => {
    // Set the active index to the clicked index
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${activeIndex === index ? "active" : ""}`}
        >
          <Card />
        </div>
      ))}
      {controls && (
        <div className="controls">
          <button onClick={() => handleClick(activeIndex - 1)}>Previous</button>
          <button onClick={() => handleClick(activeIndex + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
