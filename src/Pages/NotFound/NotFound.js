import React from "react";
import img from "../../images/notFound/404.png";
const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-danger fw-bolder">Page is Not Found 404</h2>
      <img src={img} alt="Not Found" className="img-fluid" />
    </div>
  );
};

export default NotFound;
