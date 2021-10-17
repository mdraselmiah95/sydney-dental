import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner d-flex align-items-center text-center justify-content-center py-5">
      <div className="text-center my-5 py-5 mainText">
        <h1 className="fw-bolder mainTitle">
          Sydney where experience meets excellence
        </h1>
        <p className="my-4 text-dark fs-5 fw-bold">
          We provides always our best services for our clients and always
        </p>
        <button className="rounded-pill fs-5 py-2 px-5 btn btn-outline-warning">
          SERVICES
        </button>
      </div>
    </div>
  );
};

export default Banner;
