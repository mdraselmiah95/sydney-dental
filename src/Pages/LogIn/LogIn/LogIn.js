import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faBackward,
  faUndo,
  faUserCheck,
  faUserLock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import useAuth from "../../../hooks/useAuth";
import img from "../../../images/login/Login.png";
import "./LogIn.css";
const LogIn = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
    isLogin,
    toggleLogin,
    handleResetPassword,
    handleNameChange,
  } = useAuth();
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bolder my-5 text-primary">
        <span>
          {" "}
          <FontAwesomeIcon icon={faUsers} className="me-2" /> Please :
        </span>
        <Typewriter
          options={{
            strings: ["LogIn or Register"],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        ></Typewriter>
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 border p-4">
          <form onSubmit={handleRegistration}>
            <h3 className="mb-4 text-info fw-bolder">
              <FontAwesomeIcon icon={faUserCheck} className="me-2" />
              Please {isLogin ? "Login" : "Register"}:
            </h3>

            {!isLogin && (
              <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onBlur={handleNameChange}
                    className="form-control"
                    id="inputName"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}

            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Your Password"
                  required
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered ?
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-2 text-center text-danger">{error}</div>
            <button type="submit" className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faUserLock} className="me-2" />{" "}
              {isLogin ? "Login" : "Register"}
            </button>
            <button
              type="button"
              onClick={handleResetPassword}
              className="btn btn-outline-secondary btn-sm ms-2"
            >
              <FontAwesomeIcon icon={faUndo} className="me-1" /> Reset Password
            </button>
            <NavLink to="/home" className="d-inline ms-2">
              <button className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faBackward} className="me-2" />
                GO Back Home
              </button>
            </NavLink>
          </form>
          <br />
          <hr />
          <button
            onClick={signInUsingGoogle}
            className="btn btn-outline-warning"
          >
            <FontAwesomeIcon icon={faGoogle} className="me-2" />
            Google Sign In
          </button>
        </div>
        <div className="col-md-6">
          <img src={img} alt="login" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
