import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import axios from "axios";
import Navbar from "./components/Navbar";
import ForgotPassword from "./screens/ForgotPassword";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/frgtpwd" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
