import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/slider/Slide1.jpg";
import banner2 from "../../../images/slider/Slide2.jpg";
import banner3 from "../../../images/slider/Slide3.jpg";
import banner4 from "../../../images/slider/Slide4.jpg";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="my-5">
      <h2 className="text-center slider-h2 my-3">Our Environment</h2>
      <Carousel>
        <Carousel.Item>
          <img className="d-block img-fluid" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src={banner3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src={banner4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
