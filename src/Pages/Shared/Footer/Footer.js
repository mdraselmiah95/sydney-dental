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
                  <NavLink to="/care" className="footer-menu  text-light">
                    CARE
                  </NavLink>
                  <NavLink to="/experts" className="footer-menu  text-light">
                    EXPERTS
                  </NavLink>
                  <NavLink to="/login" className="footer-menu  text-light">
                    LogIn
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container text-center">
                <h3>BOOK ONLINE</h3>
                <input
                  className="footer-input mb-2"
                  type="text"
                  placeholder="Enter Email"
                />

                <div className="footer-phone-icon my-3">
                  <h5>
                    <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
                    PHONE: (02) 9231 3822
                  </h5>
                </div>

                <div className="footer-phone-icon">
                  <p>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
                    Level 4, 12 O’Connell St. Sydney, NSW 2000
                  </p>
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
