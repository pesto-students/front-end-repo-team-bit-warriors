import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios"
import Grid from "@mui/material/Grid";
import ShopingGirl from "../../Images/salePic.jpg"
import TextField from '@mui/material/TextField';
import { setTotalUsers } from '../../ReduxStore/userReducer';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import "../../style/addPage.css"
import toastr from 'toastr';
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import {
    Navigate,
    useParams
} from "react-router-dom";

export default function AddUser() {
    const [userData, setuserData] = useState([]);
    const totalUsers = useSelector((state) => state.UserNumber.totalUsers);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    let { parameter } = useParams();
    console.log("kkkkkkkkkkkkkkk", parameter);
    useEffect(() => {
        console.log("ueeffect of update user is called",parameter);
        getUsers()
    }, [])

    const [userFormData, SetUserFormData] = useState({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        Phone: "",
    })

    const handleFormData = (event) => {
        let currentFieldName = event.target.name;
        let value = event.target.value;
        SetUserFormData({
            ...userFormData,
            [currentFieldName]: value
        });
    };

    const getUsers = async () => {
        console.log("use Effect Is called To Update", parameter)
        console.log("use Effect Is called To Update", typeof (parameter))
        try {
            if (parameter == "false") {
                setuserData("");
            }
            else {
                const id = parameter
                const response = await axios.get(`https://malldekho-service.onrender.com/users/${id}`);
                console.log(">>>>>>>>>", response.data);
                let assignData = response.data;
                setuserData(response.data);
                userFormData.FirstName = assignData.firstname;
                userFormData.LastName = assignData.lastname;
                userFormData.UserName = assignData.username;
                userFormData.Email = assignData.email;
                userFormData.Password = assignData.password;
                userFormData.Phone = assignData.phone;
            }
        } catch (error) {
            console.log(error)
        }
    }

    const payload = {
        username: userFormData.UserName,
        firstname: userFormData.FirstName,
        lastname: userFormData.LastName,
        email: userFormData.Email,
        password: userFormData.Password,
        phone: userFormData.Phone,
    }
    let button = userData ? "UPADATE" : "SAVE";

    const handleSubmit = async (e) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        e.preventDefault();
        const errors = {};
        if (userFormData.UserName.trim() === '') {
            errors.UserName = 'UserName is required';
        } else if (userFormData.UserName.trim().length > 20) {
            errors.UserName = 'Mall name must be less than 20 char';
        }
        if (userFormData.FirstName.trim() === '') {
            errors.FirstName = 'FirstName is required';
        }
        if (userFormData.LastName.trim() === '') {
            errors.LastName = 'FirstName is required';
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (userFormData.Email.trim() === '') {
            errors.Email = 'Email is required';
        } else
            if (userFormData.Email.trim().length < 5) {
                errors.email = 'email must be at least 5 characters';
            } else if (!emailRegex.test(userFormData.Email)) {
                errors.Email = 'Enter a valid email address';
            } else {
                //errors.email ='';
                console.log('');
            }
        const onlyNumbersRegex = /^\d+$/;
        if (userFormData.Phone === '') {
            errors.Phone = 'Phone is required';
        } if (userFormData.Phone.trim().length > 10 || userFormData.Phone.trim().length < 10) {
            errors.Phone = 'Invalid phone number';
        } else if (!onlyNumbersRegex.test(userFormData.Phone)) {
            errors.Phone = 'Invalid phone number';
        }
        if (userFormData.Password.trim().length === '') {
            errors.Phone = 'Password is required';
        } else if (userFormData.Password.trim().length < 8) {
            errors.Password = 'Password must be more than 8 character';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully');
            // Add your logic to handle form submission here (e.g., API call or saving to state)
            // createUser(formData);
            console.log("==================================", userFormData);
            if (button == "SAVE") {
                console.log("payload.........", payload)
                console.log("subit is trigger.........", userFormData);
                try {
                    let reqData = qs.stringify(payload)
                    let config = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: `http://localhost:30001/users`,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: reqData

                    }

                    axios.request(config)
                        .then((response) => {
                            //console.log('reached');
                            dispatch(setTotalUsers({ totalUsers: ++totalUsers }))
                            console.log(JSON.stringify(response.data));
                            navigate("app/tracker/user");
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                //     const response = await axios.post(`http://localhost:30001/users`, payload);
                //     if (response.data) {
                //         console.log("0000000000000000000000000", response.data);
                //         dispatch(setTotalUsers({ totalUsers: ++totalUsers }))
                // }}
                }
                catch (error) {
                    console.log(error)
                }
            }
            else {
                const payload = {
                    username: userFormData.UserName,
                    firstname: userFormData.FirstName,
                    lastname: userFormData.LastName,
                    email: userFormData.Email,
                    password: userFormData.Password,
                    phone: userFormData.Phone
                }
                console.log("parameter.....", parameter);
                console.log("=+++++++++++++++++++++", userFormData);
                try {
                    const response = await axios.put(`https://malldekho-service.onrender.com/users/${parameter}`, payload);
                    console.log("response...by Update", response.data);
                    console.log("response...by Update", response.status);
                    if (response.status == 200) {
                        navigate("/app/tracker/user");
                        toastr.success('Update Successful!', 'Success', {
                            closeButton: true,
                            progressBar: true,
                        });
                    } else {
                        toastr.success('Upadte failed!', 'Failed', {
                            closeButton: true,
                            progressBar: true,
                        });

                    }
                } catch (error) {

                }
            }
        }
    }
    return (
        <>
            <div class="heading">Add Your User</div>
            <Box class="container">
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2} lg={3}>
                        <div class="imageContainer">
                            <img src={ShopingGirl} class="image" />
                        </div>
                    </Grid>
                    <Grid xs={10} md={10} lg={9} container spacing={0}>
                        <div class="form">
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 5, width: '45ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <form type="submit" onSubmit={handleSubmit} autoComplete="off">
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                id="outlined-basic"
                                                Label="firstname"
                                                name="FirstName"
                                                onChange={handleFormData}
                                                value={userFormData.FirstName}
                                                variant="outlined"
                                                label="First Name"
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.FirstName && <small className="messageHelp">{errors.FirstName}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Last Name"
                                                name="LastName"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.LastName}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.LastName && <small className="messageHelp">{errors.LastName}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                id="standard-error"
                                                label="User Name"
                                                name="UserName"
                                                // defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.UserName}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.UserName && <small className="messageHelp">{errors.UserName}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                id="standard-error-helper-text"
                                                label="Email"
                                                name="Email"
                                                // defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Email}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Email && <small className="messageHelp">{errors.Email}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                id="standard-error"
                                                label="Password"
                                                name="Password"
                                                // defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Password}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Password && <small className="messageHelp">{errors.Password}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                id="standard-error-helper-text"
                                                label="Mobile No."
                                                name="Phone"
                                                // defaultValue={userData.phone}
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Phone}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Phone && <small className="messageHelp">{errors.Phone}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttonContainer">
                                        <button type="submit" onClick={handleSubmit} class="submitButton">{button}</button>
                                        {/* <button style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",color:"black" }}>CLEAR</button> */}
                                    </div>
                                </form>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
