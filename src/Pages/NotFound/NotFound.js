import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/notFound/404.png";
const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-danger fw-bolder">Page is Not Found 404</h2>
      <img src={img} alt="Not Found" className="img-fluid" />
      <NavLink to="/home">
        <button className="btn btn-outline-danger mb-4">GO Back Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
