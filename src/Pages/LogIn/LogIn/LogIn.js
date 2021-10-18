import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./LogIn.css";
const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="container my-5 text-center">
      <h2>Please login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-outline-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default LogIn;
