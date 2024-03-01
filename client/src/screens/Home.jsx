import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Math Quiz for Kids</h1>
      <div style={{ fontSize: "30px" }}>
        <Link to="/login">Login</Link> <br />
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default Home;
