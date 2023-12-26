import React, { useState } from "react";
import "./css/MIx.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cPassShow, setCPassShow] = useState(false);

  // ------------------------------------------------------------

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // ------------------------------------------------------------

  const GetValue = (e) => {
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  // ------------------------------------------------------------

  const SignUpFrom = async (e) => {
    e.preventDefault();
    const { fname, email, password, cpassword } = inpval;
    if (fname === "") {
      toast.error("Fname is Required");
    } else if (email === "") {
      toast.error("Email is Required");
    } else if (!email.includes("@")) {
      toast.error("Email is Wrong");
    } else if (password === "") {
      toast.error("password is Required");
    } else if (password.length < 6) {
      toast.error("password Must be 6 character");
    } else if (cpassword === "") {
      toast.error("Confirm password is Required");
    } else if (cpassword.length < 6) {
      toast.error("Confirm password Must be 6 character");
    } else if (password !== cpassword) {
      toast.error("Password  and Confirm aren't Match");
    } else {
      try {
        const User = await axios.post("http://localhost:5000/register", inpval);
        toast.success(User.data.msg);
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
      } catch (error) {
        if (error.response.status === 409) {
          toast.error(error.response.data);
        } else if (error.response.status === 406) {
          toast.error(error.response.data);
        } else if (error.response.status === 401) {
          toast.error(error.response.data);
        } else {
          toast.error(error);
        }
      }
    }
  };

  // ------------------------------------------------------------

  return (
    <>
      <section>
        <div className="form_data">
          <h1> Sign Up</h1>
          <p>
            We are glad that you will be using Project Cloud to Manage your
            tasks! We hope that you will get like it.
          </p>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                autoComplete="off"
                placeholder="Enter your Name"
                id="fname"
                value={inpval.fname}
                onChange={GetValue}
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your Email"
                id="email"
                value={inpval.email}
                onChange={GetValue}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  autoComplete="off"
                  placeholder="Enter your Password"
                  id="password"
                  value={inpval.password}
                  onChange={GetValue}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={!cPassShow ? "password" : "text"}
                  name="cpassword"
                  autoComplete="off"
                  placeholder="Enter your Confirm Password"
                  id="cpassword"
                  value={inpval.cpassword}
                  onChange={GetValue}
                />
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cPassShow)}
                >
                  {!cPassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={SignUpFrom}>
              Sign Up
            </button>
            <p>
              Already have an Account?<Link to="/">Login</Link>
            </p>
          </form>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          pauseOnHover={false}
          theme="colored"
        />
      </section>
    </>
  );
};

export default Register;
