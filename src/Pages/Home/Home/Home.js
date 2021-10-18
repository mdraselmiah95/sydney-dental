import React from "react";
import Banner from "../Banner/Banner";
import Cosmetic from "../Cosmetic/Cosmetic";
import Motto from "../Motto/Motto";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Motto />
      <Cosmetic />
      <Services />
    </div>
  );
};

export default Home;
