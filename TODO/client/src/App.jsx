import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Error from "./components/Error";
import { LoginOut } from "./components/redux/slice/TodoSlice.js";
import { useDispatch } from "react-redux";
const App = () => {
  // ----------------------------------------------

  // for user Authentication

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("id")) {
      dispatch(LoginOut(true));
    }
  });

  // ----------------------------------------------

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
