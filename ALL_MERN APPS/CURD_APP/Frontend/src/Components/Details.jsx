import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/Details.css";
import axios from "axios";

// ------------------------------------------------------

const Details = () => {
  // ------------------------------------------------------

  const NavigateTo = useNavigate();

  const { id } = useParams("");

  const [getUser, setGetUser] = useState([]);

  // ------------------------------------------------------

  const FetchUserData = async () => {
    try {
      const res = await axios.get(
        `https://curd-67ec.onrender.com/profile/${id}`
      );
      setGetUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------

  const DeleteUser = async (id) => {
    try {
      await axios.delete(`https://curd-67ec.onrender.com/delete/${id}`);
      NavigateTo("/");
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        theme: "colored",
      });
    }
  };

  // ------------------------------------------------------

  useEffect(() => {
    FetchUserData();
  }, []);

  // ------------------------------------------------------

  const { name, email, age, mobile, work, address, description, _id } = getUser;

  // ------------------------------------------------------

  return (
    <>
      <div className="container">
        <h1 className="my-3">Welcome to {name}</h1>

        <div className="card">
          <div className="top_items">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt="img"
            />

            <div className="btn">
              <Link to={`/edit/${_id}`}>
                <button className="btn btn-primary">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => DeleteUser(_id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          {/* ==================================== */}

          <div className="extra_info">
            <h3>
              Name : <span> {name}</span>
            </h3>
            <h3>
              <i
                className="fa-solid fa-mobile"
                style={{ color: "rgb(97 139 237)" }}
              ></i>{" "}
              Mobile : <span> {mobile}</span>
            </h3>
            <h3>
              Age : <span> {age}</span>
            </h3>
            <h3>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "rgb(97 139 237)" }}
              ></i>{" "}
              Location : <span> {address}</span>
            </h3>
            <h3>
              <i className="fa-regular fa-envelope"></i> Email :
              <span> {email}</span>
            </h3>
            <h3>
              <i className="fa-solid fa-audio-description"></i> Description :
              <span> {description}</span>
            </h3>
            <h3>
              <i
                className="fa-solid fa-briefcase"
                style={{ color: "rgb(97 139 237)" }}
              ></i>{" "}
              Occupation : <span> {work}</span>
            </h3>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Details;
