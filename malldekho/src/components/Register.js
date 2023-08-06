import React, { useState } from "react";
import { createUser } from '../services/AuthService.js'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
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
      createUser(formData);
      toastr.success('Registration Successful!', 'Success', {
        closeButton: true,
        progressBar: true,
      });
    }
  };

//   const createUser = async (reqBody) => {
//     try {
//       let reqData = qs.stringify({
//         "username": reqBody.username,
//         "email": reqBody.email,
//         "password": reqBody.password
//       });

//       let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'http://localhost:3000/users/',
//         headers: { 
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data : reqData
//       };
      
//       axios.request(config)
//       .then((response) => {
//         //console.log('reached');
//         console.log(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         //console.log(error);
//         errors.res = error.response.data;
//         setErrors(errors);
//       });
      
//       // const response = await axios.post('http://localhost:4000/register', data);
//       //console.log('User created successfully!', response.data); // Success message, handle it as needed
//     } catch (error) {
//       console.error('User creation failed!', error); // Error message, handle it as needed
//     }
//   }

  

  return (
    <div className="content">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
          {errors.username && <small className="messageHelp">{errors.username}</small>}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          {errors.email && <small className="messageHelp">{errors.email}</small>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <small className="messageHelp">{errors.password}</small>}
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
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
      </form>
    </div>
  );
};

export default RegisterForm;
