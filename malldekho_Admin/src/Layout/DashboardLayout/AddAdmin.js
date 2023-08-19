import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios"
import Grid from "@mui/material/Grid";
import ShopingGirl from "../../Images/salePic.jpg"
import TextField from '@mui/material/TextField';
import { setTotalUsers } from '../../ReduxStore/userReducer';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


export default function AddAdmin() {
    const [userData, setuserData] = useState([]);
    const totalUsers = useSelector((state) => state.UserNumber.totalUsers);
    const dispatch = useDispatch();
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


    const payload = {
        username: userFormData.UserName,
        firstname: userFormData.LastName,
        lastname: userFormData.UserName,
        email: userFormData.Email,
        password: userFormData.Password,
        phone: userFormData.Phone,
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("==================================", userFormData);
            console.log("payload.........", payload)
            console.log("subit is trigger.........", userFormData);
            try {
                const response = await axios.post(`https://malldekho-service.onrender.com/admin/register`, payload);
                if (response.data) {
                    console.log("0000000000000000000000000", response.data);
                }
            } catch (error) {
                console.log(error)
            }
     
    }

    return (
        <>
            <div style={{ display: "inline-block", marginLeft: "89px", marginTop: "50px", fontFamily: 'Poppins', fontSize: "36px" }}>Admin</div>
            <Box sx={{ flexGrow: 1, marginTop: "35px", backgroundColor: 'rgba(255, 255, 255, 0.5)', width: "90%", alignSelf: "center", marginLeft: "5%", borderRadius: "20px", boxShadow: " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2} lg={3}>
                        <div style={{ height: "100%", overflow: "hidden", }}>
                            <img src={ShopingGirl} style={{ height: "100%", width: "100%" }} />

                        </div>
                    </Grid>

                    <Grid xs={10} md={10} lg={9} container spacing={0}>
                        <div style={{ paddingLeft: "4%", marginTop: "30px", marginBottom: "35px", height: "100%", width: "100%" }}>
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 5, width: '50ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <form type="submit" onSubmit={handleSubmit} autoComplete="off">


                                    <div>
                                        <TextField id="outlined-basic" Label="firstname" name="FirstName"
                                            required
                                            onChange={handleFormData}
                                            value={userFormData.FirstName}
                                            variant="outlined"
                                            label="First Name"
                                        />

                                        <TextField
                                            required
                                            // id="standard-error-helper-text"
                                            label="Last Name"
                                            name="LastName"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.LastName}
                                        // set inputProps={"aria-readonly"}

                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            required
                                            id="standard-error"
                                            label="User Name"
                                            name="UserName"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.UserName}

                                        />
                                        <TextField
                                            required
                                            id="standard-error-helper-text"
                                            label="Email"
                                            name="Email"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.Email}

                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            required
                                            id="standard-error"
                                            label="Password"
                                            name="Password"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.Password}


                                        />
                                        <TextField
                                            required
                                            id="standard-error-helper-text"
                                            label="Mobile No."
                                            name="Phone"
                                            // defaultValue={userData.phone}
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.Phone}


                                        />
                                    </div>

                                    <div style={{ marginLeft: "550px", display: "-webkit-inline-flex" }}>
                                        <button type="submit" style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", color: "black" }}>SAVE</button>
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
