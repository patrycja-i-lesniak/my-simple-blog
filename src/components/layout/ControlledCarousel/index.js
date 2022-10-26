import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./style.css";

import photo1 from "assets/photo-1.jpg";
import photo2 from "assets/photo-2.jpg";
import photo3 from "assets/photo-3.jpg";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 carousel__image" src={photo1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel__slideTitle">First title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel__image" src={photo2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="carousel__slideTitle">Second title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img c className="d-block w-100 carousel__image" src={photo3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="carousel__slideTitle">Third title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

