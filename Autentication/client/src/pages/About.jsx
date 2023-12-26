import React from "react";
import { useAuth } from "../store/auth";
const About = () => {
  const { userData } = useAuth();
  return (
    <>
      <div className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p style={{ fontSize: "1.5rem", color: "brown" }}>
              Welcome
              {Object.keys(userData).length === 0 ? (
                " User "
              ) : (
                <h2
                  style={{
                    color: "red",
                    display: "inline-block",
                    margin: "0 0.5rem",
                  }}
                >
                  {userData.username}
                </h2>
              )}
              to our Website
            </p>
            <h1>Why Choose Us</h1>
            <p className="about_para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam et ratione aperiam, eius odio molestias, fuga
            </p>
            <p className="about_para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              quisquam repellat quos commodi praesentium
            </p>
            <p className="about_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              tempore odio natus! Laborum, esse!
            </p>
            <p className="about_para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam et ratione aperiam, eius odio molestias, fuga
            </p>
            <p className="about_para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam et ratione aperiam, eius odio molestias, fuga
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

      <div className="info_container about">
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
    </>
  );
};

export default About;
