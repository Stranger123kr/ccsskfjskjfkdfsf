import React from "react";
import "../App.css";
const Home = () => {
  return (
    <>
      <div className="home d-flex justify-content-between align-items-center">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center" style={{ fontSize: "4rem" }}>
            Organize your <br /> work and life, finally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Nesciunt, aliquid.
          </p>
          <button
            className="nav-link active nav-btn"
            style={{ border: "none" }}
          >
            Make Todo List
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
