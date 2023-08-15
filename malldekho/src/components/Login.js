import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorizeUser } from '../services/AuthService.js'
import "../styles/Auth.css"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting the form
    const errors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() < 5 || formData.email.trim() === '') {
      errors.email = 'email must be at least 5 characters';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    } else {
      console.log('');
    }

    // Password validation
    if (formData.password.trim() === '') {
      errors.password = 'Enter a password';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else {
      console.log('');
    }

    // Update the state with errors, if any
    setErrors(errors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully');
      // Add your logic to handle form submission here (e.g., API call or authentication)
      authorizeUser(formData);

      navigate(`/`);
    }
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formGroup">
            <div>

                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                />
                {errors.email && <small className="messageHelp">{errors.email}</small>}
            </div>
            <div>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                {errors.password && (
                    <small className="messageHelp">{errors.password}</small>
                )}
                {/* <a href="" id="passwordReset">
                    Forgot password?
                </a> */}
                {errors.res && (
                    <small className="messageHelp">{errors.res}</small>
                )}
            </div>
            <button className="btn" type="submit">
                Login
            </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;