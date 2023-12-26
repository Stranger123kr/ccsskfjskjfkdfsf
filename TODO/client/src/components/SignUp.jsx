import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUpUser } from "../components/redux/slice/TodoSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const GetUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SubmitUser = (e) => {
    e.preventDefault();
    dispatch(SignUpUser(user));
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="signup home d-flex justify-content-between align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputUserName" className="form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    className="form-control"
                    onChange={GetUser}
                  />
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    className="form-control"
                    onChange={GetUser}
                  />
                </div>
                <div className="mb-3  w-100">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    className="form-control"
                    onChange={GetUser}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={SubmitUser}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="col-lg-4 co d-flex  justify-content-between align-items-center">
              <h1
                style={{ fontSize: "6rem", marginLeft: "2rem", color: "red" }}
              >
                Sign <br /> Up
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default SignUp;
