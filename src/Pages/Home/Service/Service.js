import React from "react";
import "./Service.css";
const Service = (props) => {
  const { title, work, imgOne } = props.service;
  return (
    <div className="col-lg-4 col-md-6 text-center p-3 mb-4">
      <div className="col">
        <div className="card main-card d-flex align-items-center border-0">
          <img src={imgOne} className="card-img-top w-25" alt="" />
          <div className="card-body">
            <h3 className="card-title service-h3">{title}</h3>
            <p className="service-p">{work}</p>
          </div>
          <button className="btn btn-outline-light">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Service;