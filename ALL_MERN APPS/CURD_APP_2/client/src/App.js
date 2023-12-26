import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Headers/Header";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
