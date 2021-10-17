import React from "react";
import Banner from "../Banner/Banner";
import Cosmetic from "../Cosmetic/Cosmetic";
import Motto from "../Motto/Motto";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Motto />
      <Cosmetic />
    </div>
  );
};

export default Home;
