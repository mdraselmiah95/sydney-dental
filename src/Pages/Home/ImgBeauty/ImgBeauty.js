import React from "react";
import { Parallax } from "react-parallax";
import img from "../../../images/parallax/parallax.jpg";
import "./ImgBeauty.css";
const ImgBeauty = () => {
  return (
    <div>
      <Parallax bgImage={img} strength={300}>
        <div className="py-5 text-center">
          <p className="imgBeauty-p" style={{ margin: "14% 0" }}>
            QUALITY & EXPERIENCE
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default ImgBeauty;
