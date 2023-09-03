import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../components/Card";
//autoplay, pauseonhover,append dots
export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <Card
              heading="Hello World"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat."
              image="https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg"
            />
          </div>
          <div>
            <Card
              heading="Hello World"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat."
              image="https://assets.churchofjesuschrist.org/f8/17/f817e4a21336ad73433b4f1f0a5dfca77c6271d41049592/man_studying_reading.jpeg"
            />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
