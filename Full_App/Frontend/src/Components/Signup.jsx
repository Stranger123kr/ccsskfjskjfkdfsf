import React, { useState } from "react";
import axios from "axios";
import "./Css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", user);
      console.log(response.data);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-4">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form className="registration-form" id="registration-form">
                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Phone"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Profession"
                    name="work"
                    id="work"
                    value={user.work}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="confirm_password">
                    <i className="zmdi zmdi-lock-open"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Confirm Password"
                    name="confirm_password"
                    id="confirm_password"
                    value={user.confirm_password}
                    onChange={handleInput}
                  />
                </div>

                {/* ==================================== */}
              </form>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Register"
                  className="btn btn-primary px-5 my-4"
                  onClick={handleSubmit}
                />
              </div>

              {/* ==================================== */}

              <Link to="/login" className="signup-image-link">
                I am already register
              </Link>
            </div>

            {/* ============================================================================== */}
            {/* this is image part of signup form */}

            <div className="signup-img">
              <figure>
                <img
                  src="https://img.freepik.com/premium-vector/easy-use-flat-illustration-receipt_9206-3046.jpg?w=340"
                  alt="signup"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
