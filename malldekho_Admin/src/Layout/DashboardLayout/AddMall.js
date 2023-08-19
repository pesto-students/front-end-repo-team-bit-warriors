import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ShopingGirl from "../../Images/UserPage.jpg"
import TextField from '@mui/material/TextField';
import axios from "axios";
import "../../style/addPage.css"
import { BrowserRouter as Router, Switch, Route, useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTotalMalls } from '../../ReduxStore/mallReducer';
import { useSelector } from 'react-redux';
import toastr from 'toastr';
import { useNavigate } from "react-router-dom";
import "../../style/error.css"
export default function AddMall() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = React.useState({});
    const [file, setFile] = React.useState();
    const totalMalls = useSelector((state) => state.MallNumber.totalMalls);
    let { parameter } = useParams();
    const [mallData, setMallData] = React.useState("");
    const [userFormData, SetUserFormData] = React.useState({
        Name: "",
        Area: "",
        State: "",
        City: "",
        Pin: "",
        Landmark: "",
        Gmaplink: "",
        FloorsCount: "",
        Floors: [],
        Phone: "",
        clockingtimes: [],
        shopCount: "",
        Website: "",
        Email: "",
    })

    React.useEffect(() => {
        getMall()
    }, [])

    const getMall = async () => {
        console.log("use Effect Is called To Update", parameter)
        console.log("use Effect Is called To Update", typeof (parameter))
        try {
            if (parameter == "false") {
                setMallData("");
            }
            else {
                const id = parameter
                const response = await axios.get(`https://malldekho-service.onrender.com/malls/${id}`);
                console.log(">>>>>>>>>", response.data);
                let assignData = response.data;
                setMallData(response.data);
                userFormData.Name = assignData.name;
                userFormData.Area = assignData.area;
                userFormData.State = assignData.state;
                userFormData.City = assignData.city;
                userFormData.Pin = assignData.pin;
                userFormData.Landmark = assignData.landmark;
                userFormData.Gmaplink = assignData.gmaplink;
                userFormData.FloorsCount = assignData.floorsCount;
                userFormData.Floors = assignData.floors
                userFormData.Phone = assignData.phone;
                userFormData.clockingtimes = assignData.clockingtimes;
                userFormData.shopCount = assignData.shopCount;
                userFormData.Website = assignData.website;
                userFormData.Email = assignData.email;
                setFile(assignData.images);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFormData = (event) => {
        let currentFieldName = event.target.name;
        let value = event.target.value;
        SetUserFormData({
            ...userFormData,
            [currentFieldName]: value
        });
    };

    function handleChangeImage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // console.log(".........................", parameter);
    const payload = {
        name: userFormData.Name,
        area: userFormData.Area,
        state: userFormData.State,
        city: userFormData.City,
        pin: userFormData.Pin,
        landmark: userFormData.Landmark,
        gmaplink: userFormData.Gmaplink,
        floorsCount: userFormData.FloorsCount,
        floors: userFormData.Floors,
        phone: userFormData.Phone,
        clockingtimes: userFormData.clockingtimes,
        shopCount: userFormData.shopCount,
        website: userFormData.Website,
        email: userFormData.Email,
        images: file
    }

    let button = mallData ? "UPADATE" : "SAVE";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (userFormData.Name.trim() === '') {
            errors.Name = 'Mall name is required';
        } else if (userFormData.Name.trim().length > 20) {
            errors.Name = 'Mall name must be less than 20 char';
        }
        if (userFormData.Area.trim() === '') {
            errors.Area = 'Area is required';
        }
        if (userFormData.State.trim() === '') {
            errors.State = 'State is required';
        }
        if (userFormData.Pin.trim() === '') {
            errors.Pin = 'Pin is required';
        }
        if (userFormData.Landmark.trim() === '') {
            errors.Landmark = 'Landmark is required';
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
        if (userFormData.Gmaplink.trim() === '') {
            errors.Gmaplink = 'Gmaplink is required';
        }
        if (userFormData.FloorsCount === '') {
            errors.FloorsCount = 'FloorsCount is required';
        }
        const onlyNumbersRegex = /^\d+$/;     
        if (userFormData.Phone === '') {
            errors.Phone = 'Phone is required';
        }else if(userFormData.Phone.trim().length >10|| userFormData.Phone.trim().length <10)
        {
            errors.Phone = 'Invalid phone number';
        }else if(!onlyNumbersRegex.test(userFormData.Phone)){
            errors.Phone = 'Invalid phone number';

        }

        if (userFormData.clockingtimes.length === 0) {
            errors.clockingtimes = 'clockingtimes is required';
        }
        if (userFormData.shopCount === '') {
            errors.shopCount = 'shopCount is required';
        }
        if (userFormData.Website.trim() === '') {
            errors.Website = 'Website is required';
        }
        if (userFormData.City.trim() === '') {
            errors.City = 'City is required';
        }
        if (userFormData.Floors.length === 0) {
            errors.Floors = 'Floors is required';
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully');
            // Add your logic to handle form submission here (e.g., API call or saving to state)
            // createUser(formData);
            if (button == "SAVE") {
                console.log("payload.................", userFormData)
                try {
                    const response = await axios.post(`https://malldekho-service.onrender.com/malls`, payload);
                    if (response.status==200) {
                        console.log("0000000000000000000000000", response.data);
                        dispatch(setTotalMalls({ totalMalls: ++totalMalls }))
                        toastr.success('Registration Successful!', 'Success', {
                            closeButton: true,
                            progressBar: true,
                        });
                        navigate("/app/tracker/mall")
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
            else {
                const payload = {
                    name: userFormData.Name,
                    area: userFormData.Area,
                    state: userFormData.State,
                    city: userFormData.City,
                    pin: userFormData.Pin,
                    landmark: userFormData.Landmark,
                    gmaplink: userFormData.Gmaplink,
                    floorsCount: userFormData.FloorsCount,
                    floors: userFormData.Floors,
                    phone: userFormData.Phone,
                    clockingtimes: userFormData.clockingtimes,
                    shopCount: userFormData.shopCount,
                    website: userFormData.Website,
                    email: userFormData.Email,
                    images: file
                }
                console.log("parameter.....", parameter);
                console.log("=+++++++++++++++++++++", userFormData);
                try {
                    const response = await axios.put(`https://malldekho-service.onrender.com/malls/${parameter}`, payload);
                    console.log("response...by Update", response.data);
                    if(response.status==200)
                    {
                        navigate("/app/tracker/mall")
                    }
                } catch (error) {
    
                }
            }

        
        }       
    }

    return (
        <>
            <div class="heading">{button} Your Mall</div>
            <Box class="container">
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2} lg={3}>
                        <div class="imageContainer">
                            <img src={file} class="image" />

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
                                                required
                                                label="Name"
                                                name="Name"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Name}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Name && <small className="messageHelp">{errors.Name}</small>}
                                            </div>
                                        </div>

                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="State"
                                                name="State"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.State}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.State && <small className="messageHelp">{errors.State}</small>}
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Area"
                                                name="Area"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Area}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Area && <small className="messageHelp">{errors.Area}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">

                                            <TextField
                                                required
                                                label="Email"
                                                name="Email"
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
                                                label="City"
                                                name="City"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.City}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.City && <small className="messageHelp">{errors.City}</small>}
                                            </div>
                                        </div>

                                        <div className="textFieldContainer">

                                            <TextField
                                                required
                                                label="Pin"
                                                name="Pin"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Pin}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Pin && <small className="messageHelp">{errors.Pin}</small>}
                                            </div>
                                        </div>

                                    </div>

                                    <div>

                                        <div className="textFieldContainer">

                                            <TextField
                                                required
                                                label="Landmark"
                                                name="Landmark"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Landmark}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Landmark && <small className="messageHelp">{errors.Landmark}</small>}
                                            </div>
                                        </div>

                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Gmaplink"
                                                name="Gmaplink"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Gmaplink}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Gmaplink && <small className="messageHelp">{errors.Gmaplink}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="FloorsCount"
                                                name="FloorsCount"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.FloorsCount}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.FloorsCount && <small className="messageHelp">{errors.FloorsCount}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Floors"
                                                name="Floors"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Floors}
                                                style={{ marginBottom: "8px" }}

                                            />
                                            <div className="errorContainer">
                                                {errors.Floors && <small className="messageHelp">{errors.Floors}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Phone"
                                                name="Phone"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Phone}
                                                style={{ marginBottom: "8px" }}

                                            /> <div className="errorContainer">
                                                {errors.Phone && <small className="messageHelp">{errors.Phone}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="clockingtimes"
                                                name="clockingtimes"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.clockingtimes}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.clockingtimes && <small className="messageHelp">{errors.clockingtimes}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="shopCount"
                                                name="shopCount"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.shopCount}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.shopCount && <small className="messageHelp">{errors.shopCount}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                required
                                                label="Website"
                                                name="Website"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={userFormData.Website}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Website && <small className="messageHelp">{errors.Website}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="addUserImageContainer" >
                                            <h2 class="addUserImageHeading" >Add User Image</h2>
                                            <input st type="file" onChange={handleChangeImage} />
                                        </div>
                                        <div class="buttonContainer">
                                            <button type="submit" onClick={handleSubmit} class="submitButton">{button}</button>
                                            {/* <button style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",color:"black" }}>CLEAR</button> */}
                                        </div>
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
