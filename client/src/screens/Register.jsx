import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../apicalls/users";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    std: "",
    address: "",
    mobileNo: "",
    schoolName: "",
    question1: "",
    question2: "",
    question3: "",
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
    const {
      name,
      email,
      password,
      std,
      address,
      mobileNo,
      schoolName,
      question1,
      question2,
      question3,
    } = formData;

    try {
      const response = await registerUser({
        name,
        email,
        password,
        std,
        address,
        mobileNo,
        schoolName,
        question1,
        question2,
        question3,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-part">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
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
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Standard:
            <select
              name="std"
              value={formData.std}
              onChange={handleChange}
              required
            >
              <option value="">Select Standard</option>
              <option value="1">Standard 1</option>
              <option value="2">Standard 2</option>
              <option value="3">Standard 3</option>
              <option value="4">Standard 4</option>
              <option value="5">Standard 5</option>
            </select>
          </label>
          <br />
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
            />
          </label>
        </div>

        <div className="form-part">
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <h4>Security Questions</h4>
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
        </div>
        <button type="submit">Register</button>
        <div>
          Have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
