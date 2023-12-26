import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const GetUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // -----------------------------------------
  const navigation = useNavigate();
  const { Store_tokenLs } = useAuth();
  // -----------------------------------------

  const SubmitRegisterData = async (e) => {
    e.preventDefault();
    try {
      const User = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );
      Store_tokenLs(User.data.Jwt_token);
      toast.success(User.data.msg);
      navigation("/");
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(error.response.data);
      } else if (error.response.status === 409) {
        toast.error(error.response.data);
      } else {
        toast.error(error.response.data.message.slice(24));
      }
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="register_img"
                  width="400"
                  height="450"
                />
              </div>

              {/* lets tackle register page */}

              <div className="registration-from">
                <h1 className="main-heading mb-3">Register From</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={GetUserData}
                    />
                  </div>
                  {/* ----------------------------------------- */}
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={GetUserData}
                    />
                  </div>
                  {/* ----------------------------------------- */}
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={GetUserData}
                    />
                  </div>
                  {/* ----------------------------------------- */}
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={GetUserData}
                    />
                  </div>
                  <br />
                  <button
                    onClick={SubmitRegisterData}
                    type="submit"
                    className="btn btn-submit"
                  >
                    Register Now
                  </button>
                  {/* ----------------------------------------- */}
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
