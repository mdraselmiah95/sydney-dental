import React from "react";
import Banner from "../Banner/Banner";
import Cosmetic from "../Cosmetic/Cosmetic";
import Motto from "../Motto/Motto";
import Parallax from "../Parallax/Parallax";
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
      <Parallax />
    </div>
  );
};

export default Home;
