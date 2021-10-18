import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const matchingItem = data.filter((td) => td.id === Number(id));

  return (
    <div className="container-fluid serviceDetails mb-3">
      <h2 className="text-center my-4">{matchingItem[0]?.titleTwo}</h2>
      <div className="row border px-2 py-4 mx-2 rounded justify-content-center">
        <div className="col-md-4">
          <img
            src={matchingItem[0]?.imgTwo}
            alt="service doctor"
            className="border p-2 img-fluid rounded"
          />
        </div>
        <div className="col-md-8 px-2 mt-2">
          <p>{matchingItem[0]?.details}</p>
          <NavLink to="/home">
            <button className="btn btn-outline-info mb-4">GO Back Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
