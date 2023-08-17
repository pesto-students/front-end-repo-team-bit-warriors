import React, { useState } from "react";
import UserService from "../services/UserService";
import { useEffect } from "react";
import P1 from "../assets/P1.png"
import "../styles/Profile.css";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";




const ProfilePage = () => {

    
    const intialState = {
        firstname: "",
        email: "",
        username: "",
        phone: "",
        image: ""
    }

    const [formData, setFormData] = useState([intialState]);
    const [userId, setUserId] = useState([]);

    useEffect(() => {
        const token = Cookies.get('authCookie');
        if (token) {
            try {
                const decodedToken = jwt_decode(token);
                console.log(decodedToken)
                setUserId(decodedToken._id);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);
    

    useEffect(() => {

        async function fetchUser() {
            try {
                const userData = await UserService.fetchUserById(userId);
                setFormData(userData)
                console.log(userData, formData)
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }
        fetchUser();
    }, [userId])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("formData", formData)
    };


    const handleSubmit = async () => {
        console.log("formData", formData)
        await UserService.updateUserById(formData)
    }

    return (
        <section className="profile">
            <div className="profileContainer">
                <div className="profileTitle">
                    <div className="profileImage">
                        {/* <img src={formData.image} alt="Profile Picture" /> */}
                        <img src={P1} alt="Profile Picture" />
                    </div>
                    <div className="inputGroup">
                        <button type="button" onClick={handleSubmit}>Edit</button>
                    </div>
                </div>
                <form className="ProfileForm">
                    <div className="inputGroup">
                        <label>Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData?.firstname}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData?.email}
                            onChange={handleInputChange}
                            placeholder="John.Doe@gmail.com"
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Username</label>
                        <input
                            type="text"
                            name="name"
                            value={formData?.username}
                            onChange={handleInputChange}
                            placeholder="JohnIsMe"
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Phone number</label>
                        <input
                            type="phone"
                            name="phone"
                            value={formData?.phone}
                            onChange={handleInputChange}
                            placeholder="384593453"
                        />
                    </div>
                    <div className="inputGroup">
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};


export default ProfilePage;