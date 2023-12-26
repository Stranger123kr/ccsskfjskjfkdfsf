import React from "react";
import "./Css/PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div className="PageNotFound">
        <div className="link">
          <Link to={"/"}>Back To Home</Link>
        </div>
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-11371.jpg?w=740&t=st=1695039309~exp=1695039909~hmac=0b4e3cd9ecb404438651a858c734d5fa021364563e2c07a83f0aa77401e268be"
          alt="page 404"
        />
      </div>
    </>
  );
};

export default PageNotFound;
