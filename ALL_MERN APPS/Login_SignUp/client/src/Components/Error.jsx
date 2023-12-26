import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            minHeight: "85vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=540&t=st=1697969812~exp=1697970412~hmac=c6ae80a9f64593027e209cb71093d10d99d119c72fb0b267519520c6dd4cb19b"
            alt="error"
            style={{ width: "500px", marginBottom: 20 }}
          />
          {/* <h1 className="mb-3">404 ERROR </h1> */}
          <h2 className="mb-3">PAGE NOT FOUND</h2>
          <Link
            to="/"
            className="btn btn-primary"
            style={{
              fontSize: "1.3rem",
              marginTop: "0.5rem",
              fontWeight: "500",
            }}
          >
            {" "}
            Back To Home Page{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
