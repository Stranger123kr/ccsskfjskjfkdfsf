import React, { useEffect } from "react";
import axios from "axios";
import "./Css/About.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const NavigationTo = useNavigate();

  const callAboutPage = async () => {
    try {
      await axios.get("http://localhost:5000/about");
    } catch (error) {
      console.log(error);
      NavigationTo("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="About-page">
        <div className="About-page-info">
          {/* ============================ */}

          <img
            src="https://images.unsplash.com/photo-1567436868551-2ee46376a85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=130&q=80"
            alt="logo-img"
          />

          {/* ============================ */}

          <div className="person_info">
            <h3>Nitesh</h3>
            <p id="web">Web Developer</p>
            <p>
              Ranking <span> 1/10 </span>
            </p>
            <div className="about_me">
              <p>About</p>
            </div>
          </div>

          {/* ============================ */}

          <div className="person_info">
            <button className="btn btn-primary">Edit Profile</button>
          </div>

          {/* ============================ */}

          <div className="person_info">
            <li>Youtube</li>
            <li>instagram</li>
            <li>Web Developer</li>
            <li>Figma</li>
            <li>SoftWare Engineer</li>
          </div>

          {/* ============================ */}

          <div className="person_info">
            <p>User id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Profession</p>
          </div>

          {/* ============================ */}

          <div className="person_info person_list">
            <p>834343443437387473</p>
            <p>Nitesh</p>
            <p>Nitesh@gmail.com</p>
            <p>8904948383</p>
            <p>Web Developer</p>
          </div>

          {/* ============================ */}
        </div>
      </div>
    </>
  );
};

export default About;
