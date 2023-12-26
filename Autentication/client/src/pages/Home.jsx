import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p style={{ fontSize: "1.2rem", color: "green" }}>
              We are the World Best IT Company
            </p>
            <h1>Welcome To new World Building Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam et ratione aperiam, eius odio molestias, fuga
              recusandae voluptatem nemo harum corporis. A modi consequatur eum
              odio esse nisi dignissimos eaque totam voluptate possimus
            </p>
            <div className="btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn">Learn More</button>
              </a>
            </div>
          </div>

          {/* hero image */}

          <div className="hero-image">
            <img
              src="/images/home.png"
              alt="home_img"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      {/* information table */}

      <div className="info_container">
        <div className="info_box">
          <div className="box box_1">
            <h3>50+</h3>
            <p>Register Companies</p>
          </div>
          <div className="box box_2">
            <h3>100,00+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="box box_3">
            <h3>500+</h3>
            <p>Well Know Developers</p>
          </div>
          <div className="box box_4">
            <h3>24/7</h3>
            <p>Services</p>
          </div>
        </div>
      </div>

      {/* --------------------------------------- */}

      {/* some more info */}

      <div className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content hero-content-2">
            <p>We are the World Best IT Company</p>
            <h1>Get Started Today</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam et ratione aperiam, eius odio molestias, fuga
              recusandae voluptatem nemo harum corporis. A modi consequatur eum
              odio esse nisi dignissimos eaque totam voluptate possimus
            </p>
            <div className="btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn">Learn More</button>
              </a>
            </div>
          </div>

          {/* hero image */}

          <div className="hero-image image_2">
            <img
              src="images/design.png"
              alt="home_img"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
