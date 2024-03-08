import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    question1: "",
    question2: "",
    question3: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, question1, question2, question3, newPassword } = formData;
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
            value={formData.email}
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
            value={formData.newPassword}
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
            value={formData.question1}
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
            value={formData.question2}
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
            value={formData.question3}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
