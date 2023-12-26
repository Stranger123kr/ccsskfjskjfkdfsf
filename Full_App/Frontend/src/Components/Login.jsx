import React, { useState } from "react";
import "./Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // =============================================

  const NavigateTo = useNavigate();

  const handleUserLogin = async () => {
    try {
      const login = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // enable sending and storing cookies
        }
      );

      if (login.status === "422") {
        alert("Invalid credentials");
      } else {
        console.log(login.data.message);
        NavigateTo("/");
      }
    } catch (error) {
      console.log(error);
      alert(
        (error.response.status = `Invalid login Data Status Code ${error.response.status}`)
      );
    }
  };

  return (
    <>
      <section className="login">
        <div className="container mt-5">
          <div className="login-content">
            <div className="login-form">
              <h2 className="form-title">Sign In</h2>
              <form
                method="POST"
                className="registration-form"
                id="registration-form"
              >
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* ==================================== */}

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Your Password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* ==================================== */}
              </form>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="login"
                  id="login"
                  value="Login"
                  className="btn btn-primary px-5 my-4"
                  onClick={handleUserLogin}
                />
              </div>

              {/* ==================================== */}

              <Link to="/registration" className="login-image-link">
                Create an account
              </Link>
            </div>

            {/* ============================================================================== */}
            {/* this is image part of login form */}

            <div className="login-img">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=400&t=st=1695015468~exp=1695016068~hmac=21123e96c411283eb50e56c3cb3d35bd5381d4173a4dfc650a8370c368eb6a5b"
                  alt="login"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
