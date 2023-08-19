import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authorizeUser } from '../services/AuthService.js'
import "../style/adminLogin.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js
import axios from "axios"
import qs from 'qs';
import Cookies from 'js-cookie';
import SecureLs from "secure-ls"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  var ls = new SecureLs()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();
//   const history = useHistory();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async(e) => {
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
    //   authorizeUser(formData);
    try {
      let data = qs.stringify({
          "email": formData.email,
          "password": formData.password
      });
      let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `https://malldekho-service.onrender.com/admin/login`,
          // withCredentials: true,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
      };

      axios.request(config)
          .then((response) => {
            console.log(response.data)
            ls.set("isUserLoggedIn",true);
              // const headers = { ...response.headers };
              // console.log("headers", headers)
              // const authToken = response.headers['x-auth-token']
              // console.log("LOGGIN TOKEN", authToken)
              // if (authToken) {
              //     Cookies.set('authCookie', authToken, { expires: 2 }); // 2 days expiry
              // }
              // toastr.success('Login Successful!', 'Success', {
              //     closeButton: true,
              //     progressBar: true,
              // });
              navigate("app/tracker");
          })
          .catch((error) => {
              console.log(error);
          });

  } catch (error) {
      console.error('User creation failed!', error); // Error message, handle it as needed
  }
    }
  };

  return (
    <div className="xyz">
    <div className="login-form">
    <div className="title"> Login</div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="formGroup">
            <div className="input-container">

                <label htmlFor="email">Email address</label>
                <input
                  className="RegisterInput"
                  type="email"
                    id="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                />
                {errors.email && <small className="messageHelp">{errors.email}</small>}
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  className="RegisterInput"
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
            <div style={{marginTop:"30px",marginLeft:"10px"}}> 
              click here to
            <Link to={`/register`}>{" "}register</Link>
            </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;