import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../App.css";

// -------------------------------------------

const Home = () => {
  // -------------------------------------------

  const [user, setUser] = useState([]);
  const [deleteUser, setDeleteUser] = useState([]);

  const GetUserData = async () => {
    try {
      const res = await axios.get("https://curd-67ec.onrender.com/");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------

  const DeleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `https://curd-67ec.onrender.com/delete/${id}`
      );
      setDeleteUser(res);
      toast.success(`${res.data.AllCurd.name} ${res.data.message}`, {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        theme: "colored",
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        theme: "colored",
      });
    }
  };

  // -------------------------------------------

  useEffect(() => {
    GetUserData();
  }, [deleteUser]);

  // -------------------------------------------

  // -------------------------------------------

  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add-btn mt-4">
            <Link to="/register">
              <button className="btn btn-primary">Add Data</button>
            </Link>
          </div>

          {/* ===============================  */}

          <table className="table mt-4">
            <thead className="table-dark">
              <tr className="Main_row_1">
                <th scope="col">Id</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {user.map((data, index) => (
              <tbody key={data._id}>
                <tr className="Main_row_2">
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.work}</td>
                  <td>{data.mobile}</td>

                  <td className="d-flex justify-content-around">
                    <Link to={`/profile/${data._id}`}>
                      <button className="btn btn-success">
                        <i className="fa-sharp fa-solid fa-eye"></i>
                      </button>
                    </Link>

                    <Link to={`/edit/${data._id}`}>
                      <button className="btn btn-primary">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteUser(data._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
