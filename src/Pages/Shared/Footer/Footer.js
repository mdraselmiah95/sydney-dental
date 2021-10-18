import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-center">
                <h3>Sydney Dental Care</h3>
                <div className="icons-container d-flex text-center align-items-center justify-content-center">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-2">
                  <small>
                    <q>
                      "The cool Brooklyn dentist who wants teeth to look as nice
                      as her instagram feed" - New York Magazine
                    </q>
                  </small>
                </p>

                <p className="mt-2">
                  <small>Rasel © All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container text-center">
                <ul>
                  <NavLink to="/home" className="footer-menu  text-light">
                    HOME
                  </NavLink>
                  <NavLink to="/services" className="footer-menu  text-light">
                    COURSES
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container ms-5">
                <h3>BOOK ONLINE</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />

                <div className="phone d-flex align-items-center mt-4">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>PHONE: (02) 9231 3822</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>Level 4, 12 O’Connell St. Sydney, NSW 2000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
