import React from "react";
import Banner from "../Banner/Banner";
import Cosmetic from "../Cosmetic/Cosmetic";
import ImgBeauty from "../ImgBeauty/ImgBeauty";
import Motto from "../Motto/Motto";
import Resources from "../Resources/Resources";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Motto />
      <Cosmetic />
      <Services />
      <Slider />
      <Resources />
      <ImgBeauty />
    </div>
  );
};

export default Home;
