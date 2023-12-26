import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../components/redux/slice/TodoSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // -----------------------------------------
  const { User } = useSelector((state) => state.Todo);

  console.log(User);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // -----------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    if (User.length !== 0) {
      localStorage.setItem("id", User.NewUser._id);
    }
  }, [User]);

  // -----------------------------------------

  const SetUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // -----------------------------------------

  const SubmitUser = (e) => {
    e.preventDefault();
    dispatch(LoginUser(user));

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
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    className="form-control"
                    onChange={SetUserData}
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
                    onChange={SetUserData}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={SubmitUser}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="col-lg-4 co d-flex  justify-content-between align-items-center">
              <h1
                style={{ fontSize: "6rem", marginLeft: "2rem", color: "red" }}
              >
                Login
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default Login;
