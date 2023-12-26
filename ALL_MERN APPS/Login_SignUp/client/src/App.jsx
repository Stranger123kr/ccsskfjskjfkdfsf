import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Components/Spinner";
const App = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const DashBoardValidate = async () => {
    try {
      const token = localStorage.getItem("UserToken");

      await axios.get("http://localhost:5000/validuser", {
        headers: {
          Authorization: token,
        },
      });
      navigate("/dash");
      setData(true);
    } catch (error) {
      console.log(error);
      setData(true);
    }
  };

  useEffect(() => {
    DashBoardValidate();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
