import React from "react";
import "./Spinner.css";
const spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default spinner;
