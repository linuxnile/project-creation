import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "question1") setQuestion1(value);
    else if (name === "question2") setQuestion2(value);
    else if (name === "question3") setQuestion3(value);
    else if (name === "newPassword") setNewPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/forgot-password", {
        email,
        question1,
        question2,
        question3,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <h3>Security Questions</h3>
        <label>
          What is your favourite colour?
          <input
            type="text"
            name="question1"
            value={question1}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          What is your favourite food?
          <input
            type="text"
            name="question2"
            value={question2}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          What is your lucky number?
          <input
            type="number"
            name="question3"
            value={question3}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Enter new password:
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
