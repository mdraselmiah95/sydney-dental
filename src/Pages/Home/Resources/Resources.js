import React from "react";
import img1 from "../../../images/resources/GetImage 1.png";
import img2 from "../../../images/resources/GetImage 2.png";
import img3 from "../../../images/resources/GetImage 3.png";
import img4 from "../../../images/resources/GetImage 4.png";
import img5 from "../../../images/resources/GetImage.png";
import "./Resources.css";
const Resources = () => {
  return (
    <div className="resources my-5 py-3" id="resource">
      <h2 className="text-center resources-h2 mt-3">
        Shop & educational resources
      </h2>
      <div className="container">
        <div className="row mt-5 mb-4">
          <div className="p-3 text-center col-lg-2 col-md-4">
            <img
              src={img1}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">Groups & Schools</h3>
          </div>
          <div className="p-3  text-center col-lg-2 col-md-4">
            <img
              src={img2}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">Oral Hygiene</h3>
          </div>
          <div className="p-3 text-center col-lg-2 col-md-4">
            <img
              src={img3}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">Patient Leaflets</h3>
          </div>
          <div className="p-3  text-center col-lg-2 col-md-4">
            <img
              src={img4}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">Mouth Cancer Action</h3>
          </div>
          <div className="p-3 text-center col-lg-2 col-md-4">
            <img
              src={img5}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">National Smile Month</h3>
          </div>
          <div className="p-3 text-center col-lg-2 col-md-4">
            <img
              src={img3}
              alt="resources One"
              className="img-fluid rounded-circle"
            />
            <h3 className="text-light mt-3">Educational Grant</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
