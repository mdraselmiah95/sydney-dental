import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);
  return (
    <div className="container main-container p-3 my-4" id="services">
      <div className="row">
        <h1 className="text-center text-light my-3">OUR SERVICES</h1>
        <div className="row row-cols-1 row-cols-md-3 gy-3 justify-content-center d-flex">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
