import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // ----------------------------------------

  const NavigateTo = useNavigate();

  // ----------------------------------------

  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });

  const SetData = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };

  const AddData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://curd-67ec.onrender.com/register", fromData);
      NavigateTo("/");
    } catch (error) {
      if (error.response.status === 400) {
        toast.info(`${error.response.data.message}`, {
          position: "top-center",
          autoClose: 3000,
          transition: Zoom,
          theme: "dark",
        });
      } else if (error.response.status === 409) {
        toast.error(`${error.response.data.message}`, {
          position: "top-center",
          autoClose: 3000,
          transition: Zoom,
          theme: "colored",
        });
      } else {
        toast.error("error please try agin", {
          position: "top-center",
          autoClose: 3000,
          transition: Zoom,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              onChange={SetData}
              value={fromData.name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              onChange={SetData}
              value={fromData.email}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              className="form-control"
              id="inputAge"
              onChange={SetData}
              value={fromData.age}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputMobile" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              className="form-control"
              id="inputMobile"
              onChange={SetData}
              value={fromData.mobile}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputWork" className="form-label">
              Work
            </label>
            <input
              type="text"
              name="work"
              className="form-control"
              id="inputWork"
              onChange={SetData}
              value={fromData.work}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="inputAddress"
              onChange={SetData}
              value={fromData.address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="description"
              onChange={SetData}
              value={fromData.description}
            ></textarea>
          </div>
          <button type="submit" onClick={AddData} className="btn btn-primary">
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Register;
