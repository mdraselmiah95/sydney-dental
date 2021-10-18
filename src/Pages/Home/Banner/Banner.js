import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner d-flex align-items-center text-center justify-content-center py-5">
      <div className="text-center my-5 py-5 mainText">
        <h1 className="fw-bolder mainTitle">
          Sydney where experience meets excellence
        </h1>
        <p className="my-4 text-dark fs-5 fw-bold my-3">
          We provides always our best services for our clients and always
        </p>
        <Nav.Link as={HashLink} to="/home#services">
          <button className="rounded-pill fs-5 py-2 px-5 btn btn-outline-warning">
            SERVICES
          </button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Banner;
