import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stores from "../../Images/stores.jpg"
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setTotalStores } from '../../ReduxStore/storeReducer';
import "../../style/addPage.css"
import toastr from 'toastr';
import "../../style/error.css"





import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import axios from "axios";

export default function AddStores() {
    const [errors, setErrors] = React.useState({});
    const dispatch = useDispatch();
    let { parameter } = useParams();
    const [MallData, setMallData] = React.useState([]);
    const [file, setFile] = React.useState([]);
    const navigate = useNavigate();
    const totalStors = useSelector((state) => state.StoreNumber.totalStores);

    const [storeFormData, SetStoreFormData] = React.useState({
        Name: "",
        Mall: "",
        Floor: "",
        Clockingtimes: "",
        Phone: "",
        Email: "",
        Website: "",
    })
    const handleFormData = (event) => {
        let currentFieldName = event.target.name;
        let value = event.target.value;
        SetStoreFormData({
            ...storeFormData,
            [currentFieldName]: value
        });
    };

    var button = MallData ? "UPADATE" : "SAVE";

    React.useEffect(() => {
        getStore()
    }, [])

    const getStore = async () => {
        console.log("use Effect Is called To Update", parameter)
        console.log("use Effect Is called To Update", typeof (parameter))
        try {
            if (parameter == "false") {
                setMallData("");
            }
            else {
                const id = parameter
                const response = await axios.get(`https://malldekho-service.onrender.com/stores/${id}`);
                console.log(">>>>>>>>>", response.data);
                let assignData = response.data;
                setMallData(response.data);
                storeFormData.Name = assignData.name;
                storeFormData.Mall = assignData.mall;
                storeFormData.Floor = assignData.floor;
                storeFormData.Clockingtimes = assignData.clockingtimes;
                storeFormData.Phone = assignData.phone;
                storeFormData.Email = assignData.email;
                storeFormData.Website = assignData.website;
                setFile(assignData.images)
            }
        } catch (error) {
            console.log(error)
        }
    }



    function handleChangeImage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const payload = {
        name: storeFormData.Name,
        mall: storeFormData.Mall,
        floor: storeFormData.Floor,
        clockingtimes: storeFormData.Clockingtimes,
        phone: storeFormData.Phone,
        email: storeFormData.Email,
        website: storeFormData.Website,
        images: file,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (storeFormData.Name.trim() === '') {
            errors.Name = 'Storename is required';
        }else if(storeFormData.Name.trim().length>20){
            errors.Name = 'Storename must be less than 20 char';
        }

        // if (storeFormData.Mall.trim() === '') {
        //     errors.Mall = 'Mall Id is required';
        // }
        if (storeFormData.Floor.trim() === '') {
            errors.Floor = 'Floor number is required';
        }
        if (storeFormData.Clockingtimes.length=== 0) {
            errors.Clockingtimes = 'Time is required';
        }

        const onlyNumbersRegex = /^\d+$/;     
        if (storeFormData.Phone.trim() === '') {
            errors.Phone = 'Phone is required';
        }if(storeFormData.Phone.trim().length >10|| storeFormData.Phone.trim().length <10)
        {
            errors.Phone = 'Invalid phone number';

        }else if(!onlyNumbersRegex.test(storeFormData.Phone)){
            errors.Phone = 'Invalid phone number';

        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (storeFormData.Email.trim() === '') {
                errors.Email = 'Email is required';
            }else
        if (storeFormData.Email.trim().length < 5) {
            errors.email = 'email must be at least 5 characters';
        } else if (!emailRegex.test(storeFormData.Email)) {
            errors.Email = 'Enter a valid email address';
        } else {
            //errors.email ='';
            console.log('');
        }
        if (storeFormData.Website.trim() === '') {
            errors.Website = 'Website is required';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully');
            // Add your logic to handle form submission here (e.g., API call or saving to state)
            // createUser(formData);

            console.log("==================================", storeFormData);
            if (button == "SAVE") {
                console.log("payload.........", payload)
                try {
                    const response = await axios.post(`https://malldekho-service.onrender.com/stores`, payload);
                    if (response.status=200) {
                        console.log("0000000000000000000000000", response.data)
                        dispatch(setTotalStores({ totalStores: ++totalStors }))
                        navigate(`/app/tracker/stores`)

                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                const payload = {
                    name: storeFormData.Name,
                    mall: storeFormData.Mall,
                    floor: storeFormData.Floor,
                    clockingtimes: storeFormData.Clockingtimes,
                    phone: storeFormData.Phone,
                    email: storeFormData.Email,
                    website: storeFormData.Website,
                    images: file
                }
                console.log("parameter.....", parameter);
                try {
                    const response = await axios.put(`https://malldekho-service.onrender.com/${parameter}`, payload);
                    console.log("response...by Update", response.data);
                    if(response.status==200)
                    {
                        navigate(`/app/tracker/stores`)
                    }
                } catch (error) {
                }
            }
            toastr.success('Registration Successful!', 'Success', {
                closeButton: true,
                progressBar: true,
            });
        }
      
    }

    console.log(".........................", parameter);

    return (
        <>
            <div class="heading">Add Your Store</div>
            <Box class="container">
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2} lg={3}>
                        <div class="imageContainer">
                            <img src={file} value={file} class="image" />
                        </div>
                    </Grid>

                    <Grid xs={10} md={10} lg={9} container spacing={0}>
                        <div class="form">
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 5, width: '50ch' } }}
                                autoComplete="off"
                            >




                                <form type="submit" autoComplete="off">


                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                
                                                id="standard-error"
                                                label="Name"
                                                name="Name"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Name}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Name && <small className="messageHelp">{errors.Name}</small>}
                                            </div>
                                        </div>

                                        <div className="textFieldContainer">
                                            <TextField
                                                id="standard-error"
                                                label="Mall"
                                                name="Mall"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Mall}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Mall && <small className="messageHelp">{errors.Mall}</small>}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                    <div className="textFieldContainer">
                                            <TextField
                                                id="standard-error"
                                                label="Floor"
                                                name="Floor"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Floor}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Floor && <small className="messageHelp">{errors.Floor}</small>}
                                            </div>
                                        </div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                id="standard-error"
                                                label="Clockingtimes"
                                                name="Clockingtimes"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Clockingtimes}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Clockingtimes && <small className="messageHelp">{errors.Clockingtimes}</small>}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                    <div className="textFieldContainer">
                                            <TextField
                                                id="standard-error"
                                                label="Phone"
                                                name="Phone"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Phone}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Phone && <small className="messageHelp">{errors.Phone}</small>}
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
                                                value={storeFormData.Email}
                                                style={{marginBottom:"8px"}}
                                            />
                                            <div className="errorContainer">
                                                {errors.Email && <small className="messageHelp">{errors.Email}</small>}
                                            </div>
                                        </div>


                                    </div>

                                    <div>
                                        <div className="textFieldContainer">
                                            <TextField
                                                id="standard-error"
                                                label="Website"
                                                name="Website"
                                                defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={handleFormData}
                                                value={storeFormData.Website}
                                                style={{ marginBottom: "8px" }}
                                            />
                                            <div className="errorContainer">
                                                {errors.Website && <small className="messageHelp">{errors.Website}</small>}
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <div class="addUserImageContainer" >
                                            <h2 class="addUserImageHeading"  >Add Store Image</h2>
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
