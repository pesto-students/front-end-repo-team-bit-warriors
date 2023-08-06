import React, { useState } from "react";
import { authorizeUser } from '../services/AuthService.js'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    }
  };

//   const authorizeUser = async (reqBody) => {
//     try {
//       let data = qs.stringify({
//         "email": reqBody.email,
//         "password": reqBody.password
//       });
//       let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'http://localhost:3000/login',
//         headers: { 
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data : data
//       };
      
//       axios.request(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//         toastr.success('Login Successful!', 'Success', {
//           closeButton: true,
//           progressBar: true,
//         });
//       })
//       .catch((error) => {
//         //console.log(error.response.data);
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
    <div className="content active">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formGroup">
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
          {errors.password && (
            <small className="messageHelp">{errors.password}</small>
          )}
          <div>
            <input type="checkbox" id="checkBox" />
            <span>Keep me Signed in</span>
          </div>
          <a href="#" id="passwordReset">
            Forgot password?
          </a>
          {errors.res && (
            <small className="messageHelp">{errors.res}</small>
          )}
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
