import React, { useEffect, useState } from "react";
import img from "../../images/care/doctor.jpg";
import img2 from "../../images/care/tooth.jpg";
import "./Care.css";
const Care = () => {
  const [cares, setCares] = useState([]);

  useEffect(() => {
    fetch("/Cares.json")
      .then((res) => res.json())
      .then((data) => setCares(data));
  }, []);
  return (
    <div>
      <div>
        <img src={img} alt="doctor" className="img-fluid" />
      </div>
      <div className="container care">
        <h1>
          We are a full service dental office providing family, restorative, and
          cosmetic dentistry.
        </h1>
      </div>
      <div className="container">
        {cares.map((care) => (
          <div className="row my-5 text-center text-md-start" key={care.id}>
            <div className="col-md-4">
              <img src={care.img} alt="care" className="img-fluid" />
            </div>
            <div className="col-md-8 care">
              <h4>{care.title}</h4>
              <p>{care.details}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="care-main-container">
        <div className="container">
          <div className="row py-5 text-center text-md-start align-items-center">
            <div className="col-md-6">
              <img src={img2} alt="tooth" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h1>Impressionless Dentistry</h1>
              <h4>3-D Scanning for Crowns, Ortho, and Onlays</h4>
              <p>
                We are obsessed with new technologies that improve patient
                experience. <br /> <br /> That’s why we have invested in
                state-of-the-art equipment that makes dental procedures fast an
                more comfortable. <br /> <br />
                Our 3-D scanner digitally scans your mouth, making dental
                impressions a thing of the past and procedures like clear
                aligners, crowns, onlays, and mouthguards more precise and
                effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
