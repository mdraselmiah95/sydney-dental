import React from "react";
import img1 from "../../../images/cosmetic/Cosmetic-1.png";
import img2 from "../../../images/cosmetic/Cosmetic-2.png";
import img3 from "../../../images/cosmetic/Cosmetic-3.png";
import "./Cosmetic.css";

const Cosmetic = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center text-center text-md-start">
        <div className="col-lg-3">
          <img src={img1} alt="" className="img-fluid cosmetic-img" />
        </div>
        <div className="col-lg-8">
          <h3 className="cosmetic-h3">Cosmetic</h3>
          <p className="cosmetic-p">
            Creating the appearance of natural beauty requires a keen eye and
            attention to small details. Partnering with the best labs and NYC’s
            premier master ceramist has enabled us to transform smiles
            beautifully and naturally for years. Our goal: To be undetectable.
          </p>
        </div>
      </div>
      <div className="row d-flex align-items-center text-center text-md-start my-5">
        <div className="col-lg-3">
          <img src={img2} alt="" className="img-fluid cosmetic-img" />
        </div>
        <div className="col-lg-8">
          <h3 className="cosmetic-h3">Family</h3>
          <p className="cosmetic-p">
            We offer a full range of services for your whole family. You can
            feel confident that Grand Street Dental will meet all your dental
            needs. We are excited to have your family join ours!
          </p>
        </div>
      </div>
      <div className="row d-flex align-items-center text-center text-md-start">
        <div className="col-lg-3">
          <img src={img3} alt="" className="img-fluid cosmetic-img" />
        </div>
        <div className="col-lg-8">
          <h3 className="cosmetic-h3">Restorative</h3>
          <p className="cosmetic-p">
            We rely on the most trusted technologies while looking to the
            future. Our office is outfitted with the latest technologies from
            digital X-rays, to 3D scanning to make your visit as easy and
            painless as possible, while also keeping the environment and your
            comfort in mind!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
