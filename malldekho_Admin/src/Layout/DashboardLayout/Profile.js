import React, { useState, useEffect } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomizedInputBase from "./searchBar";
import profile from "../../Images/profile.jpg";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import axios from "axios";
import "../../style/profile.css"

const Profile = () => {
  const [value, setValue] = useState("janeDoe@domain.com");
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [profileFormValue, SetprofileFormValue] = useState({
    FullName: "",
    Email: "",
    UserName: "",
    Phone: ""
  })

//   useEffect(() => {
//     getUsers()
// }, [])

// const getUsers = async () => {
//   // console.log("use Effect Is called To Update", parameter)
//   // console.log("use Effect Is called To Update", typeof (parameter))
//   try {
//       if (parameter == "false") {
//           setuserData("");
//       }
//       else {
//           const id = parameter
//           const response = await axios.get(`http://localhost:30001/users/${id}`);
//           console.log(">>>>>>>>>", response.data);
//           let assignData = response.data;
//           setuserData(response.data);
//           userFormData.FirstName = assignData.firstname;
//           userFormData.LastName = assignData.lastname;
//           userFormData.UserName = assignData.username;
//           userFormData.Email = assignData.email;
//           userFormData.Password = assignData.password;
//           userFormData.Phone = assignData.phone;
//       }
//   } catch (error) {
//       console.log(error)
//   }
// }

  const handleFormData = (event) => {
    let currentFieldName = event.target.name;
    let value = event.target.value;
    SetprofileFormValue({
      ...profileFormValue,
      [currentFieldName]: value
    });

  };


  const handleClick = () => {
    setEditMode(!editMode);
    setMouseOver(false);
  };

  const handleSubmit = () => {
    console.log("...........Profile Data.................", profileFormValue);
  }

  return (
    <>
      <div className="flexContainer">
        <h1 class="header">Admin Profile</h1>

        <div class="inlineFlex inputContainer">
          <CustomizedInputBase />
          <NotificationsNoneIcon   sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
          <ErrorOutlineIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
          <div style={{ height: "42px", width: "42px", marginLeft: "39px", borderRadius: "21px", overflow: "hidden" }}>
            <img src={profile} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>

      <div class="mainContainer">
        <div class="profileSection">
          <div  className="profileImageContainerIn" >
            <img src={profile} className="profileImageIn" />
          </div>
          <button class="roundedButton editPhotoButton">Edit Photo</button>
        </div>

        <div class="formSection">
          <form type="submit" onSubmit={handleSubmit} autoComplete="off">

            <div>
            <label class="paragraphContainer">Full Name</label><br />
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name="FullName"
                  disabled={!editMode}
                  defaultValue={value}
                  onChange={handleFormData}
                />
              </FormControl>
              <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
            </div>

            <div style={{ marginTop: "25px" }}>
              <label  className="paragraph_container">Email Address</label><br />
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name="Email"
                  disabled={!editMode}
                  onChange={handleFormData}

                // onChange={}
                // value={createCycleFormValues.assets}
                />
              </FormControl>
              <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
            </div>

            <div style={{ marginTop: "25px" }}>
              <label className="paragraph_container">User Name</label><br />
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name="UserName"
                  // defaultValue={'ALL'}
                  disabled={!editMode}
                  onChange={handleFormData}
                // value={createCycleFormValues.assets}
                />
              </FormControl>
              <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
            </div>

            <div style={{ marginTop: "25px" }}>
              <label className="paragraph_container">Phone Number</label><br />
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  name="Phone"
                  // defaultValue={'ALL'}
                  disabled={!editMode}
                  onChange={handleFormData}
                // value={createCycleFormValues.assets}
                />
              </FormControl>
              <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
            </div>
            <button onClick={handleSubmit} class="roundedButton">SAVE</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Profile;