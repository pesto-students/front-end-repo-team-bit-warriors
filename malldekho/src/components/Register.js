import React, { useState } from "react";
import { createUser } from '../services/AuthService.js'
import "../styles/Auth.css"
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";



const RegisterPage = () => {
const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation before submitting the form
    const errors = {};

    // Username validation
    if (formData.username.trim() === '') {
      errors.username = 'Username is required';
    } else if (formData.username.trim() < 5) {
      errors.username = 'Username must be at least 5 characters';
    } else {
      //errors.username = '';
      console.log('');
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() < 5) {
      errors.email = 'email must be at least 5 characters';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    } else {
      //errors.email ='';
      console.log('');
    }

    // Password validation
    if (formData.password.trim() === '') {
      errors.password = 'Enter a password';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else {
      //errors.password = '';
      console.log('');
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Password does not match';
    }

    // Update the state with errors, if any
    setErrors(errors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully');
      // Add your logic to handle form submission here (e.g., API call or saving to state)
      await createUser(formData);
      setFormData(initialState)
      history.push(`/login`);

      toastr.success('Registration Successful!', 'Success', {
        closeButton: true,
        progressBar: true,
      });
    }
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"

            placeholder="Username"
            onChange={handleChange}
          />
          {errors.username && <small className="messageHelp">{errors.username}</small>}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          {errors.email && <small className="messageHelp">{errors.email}</small>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <small className="messageHelp">{errors.password}</small>}
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="messageHelp">{errors.confirmPassword}</small>
          )}
          <button className="btn" type="submit">
            Register
          </button>
          {errors.res && (
            <small className="messageHelp">{errors.res}</small>
          )}
        </div>
        <a href="/login" className="signup">Already have an account? Please login here</a>

      </form>
    </div>
  );
};

export default RegisterPage;