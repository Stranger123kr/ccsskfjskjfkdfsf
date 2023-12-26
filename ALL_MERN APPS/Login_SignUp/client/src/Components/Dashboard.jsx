import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./ContextProvider/Context";
import Spinner from "./Spinner";
const Dashboard = () => {
  const navigate = useNavigate();
  const { logindata, setLogindata } = useContext(LoginContext);
  console.log(logindata);
  // ----------------------------------------------------------------
  const [data, setData] = useState(false);
  const DashBoardValidate = async () => {
    try {
      const token = localStorage.getItem("UserToken");

      const UserFound = await axios.get("http://localhost:5000/validuser", {
        headers: {
          Authorization: token,
        },
      });
      setLogindata(UserFound.data);
      setData(true);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("*");
      } else {
        toast.error(error);
        setData(true);
      }
    }
  };

  useEffect(() => {
    DashBoardValidate();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=300&t=st=1697957946~exp=1697958546~hmac=1f2364534b6d08064c12dec90d603103927e9fcc8a90022410452f1f0e613c79"
              alt="user-icon"
            />
          </div>
          <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
            <span style={{ textDecoration: "underline", color: "#9f3535" }}>
              User Email
            </span>{" "}
            : {logindata.email ? logindata.email : "User@gmail.com"}
          </h1>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnHover={false}
            theme="colored"
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Dashboard;
