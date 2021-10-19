import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import img from "../../images/expert/dentists2.png";
import img2 from "../../images/expert/toothbrush.jpg";
import "./Experts.css";
const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/Experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div>
      <Parallax bgImage={img} strength={400} blur={4}>
        <div className="py-5 text-center">
          <p
            className="text-uppercase text-white experts-p"
            style={{ margin: "14% 0" }}
          >
            <Typewriter
              options={{
                strings: ["Our Superstar Doctors"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            ></Typewriter>
          </p>
        </div>
      </Parallax>
      <div className="container text-center experts py-5">
        <h2>Meet a Few of the Oral Experts</h2>
        <p className="">
          How do you differentiate yourself in ultra-competitive Bay Area
          dentistry? You start by assembling a world-class team of dentists and
          specialists.
        </p>
      </div>
      <div className="container">
        {experts.map((expert) => (
          <div className="row mb-5 text-center text-md-start" key={expert.id}>
            <div className="col-md-4 mb-2">
              <img src={expert.img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-8 expertsSecondPart">
              <h2>{expert.title}</h2>
              <p>{expert.details}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Parallax bgImage={img2} strength={700}>
        <div className="py-5 text-center">
          <p
            className="text-uppercase text-white experts-p"
            style={{ margin: "10% 0" }}
          >
            Our Practice
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Experts;
