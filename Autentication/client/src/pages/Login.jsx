import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";
// -----------------------------------------

const Login = () => {
  // -----------------------------------------

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // -----------------------------------------
  const navigation = useNavigate();
  const { Store_tokenLs } = useAuth();
  // -----------------------------------------

  const GetUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // -----------------------------------------

  const SubmitLoginData = async (e) => {
    e.preventDefault();
    try {
      const User = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      Store_tokenLs(User.data.Jwt_token);
      toast.success(User.data.msg);
      navigation("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        toast.error(error.response.data);
      } else if (error.response.status === 400) {
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
                  src="/images/login.png"
                  alt="register_img"
                  width="400"
                  height="450"
                />
              </div>

              {/* lets tackle register page */}

              <div className="registration-from">
                <h1 className="main-heading mb-3">Login From</h1>
                <br />

                <form>
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
                    onClick={SubmitLoginData}
                    type="submit"
                    className="btn btn-submit"
                  >
                    Login Now
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

export default Login;
