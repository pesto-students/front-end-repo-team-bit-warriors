import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomizedInputBase from './searchBar';
import React, { useEffect } from "react";
import { red } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import TotalUser from "../../Images/TotalUser.svg"
import TotalMalls from "../../Images/TotalMalls.svg"
import TotalStores from "../../Images/TotalStores.svg"
import {  useSelector } from 'react-redux';
import Profile from "../../Images/profile.jpg"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setHeader } from "../../ReduxStore/HeaderReducer";
import { setTotalMalls } from '../../ReduxStore/mallReducer';
import { setTotalStores } from '../../ReduxStore/storeReducer';
import { setTotalUsers } from '../../ReduxStore/userReducer';
import "../../style/header.css"


const Header = () => {
    const headerTag=useSelector((state)=>state.PageHeader.header)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const totalUsers = useSelector((state)=>state.UserNumber.totalUsers);
    const totalMalls = useSelector((state)=>state.MallNumber.totalMalls);
    const totalStors = useSelector((state)=>state.StoreNumber.totalStores);



    const profileNavigate=()=>{
        navigate(`/app/profile`);
    }

    useEffect ( () => {
        getUsersMallsStores();
        
      },[])

      
       
    
    const getUsersMallsStores = async()=>{
            try {           
                const response = await axios.get(`https://malldekho-service.onrender.com/users`); 
                console.log("Response From Api......",response.data);
                if(response.data)
                {
                    console.log("__________TotalUsers_________",response.data.length);
                    dispatch(setTotalUsers({ totalUsers: response.data.length }))  
                }
            } catch (error) {
                console.log(error)
            }

            
            try {           
                const response = await axios.get(`https://malldekho-service.onrender.com/malls`); 
                console.log("Response From Api......",response.data);
                if(response.data)
                {
                    console.log("__________Totalmalls_________",response.data.length);
                    dispatch(setTotalMalls({ totalMalls: response.data.length }))                 }
            } catch (error) {
                console.log(error)
            }

            
            try {           
                const response = await axios.get(`https://malldekho-service.onrender.com/stores`); 
                console.log("Response From Api......",response.data);
                if(response.data)
                {
                    console.log("__________Totalmalls_________",response.data.length);
                    dispatch(setTotalStores({ totalStores: response.data.length }))   
                                    }
            } catch (error) {
                console.log(error)
            }
    }




    return (
        <>
            <div class="flexContainer">
                <h1 class="header">{headerTag}</h1>
                  
                <div  class="inputContainer">
                    <CustomizedInputBase />
                    <NotificationsNoneIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
                    <ErrorOutlineIcon onClick={profileNavigate} sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
                    <div  class="profileImageContainer">
                        <img src={Profile} onClick={profileNavigate} style={{height:"100%",width:"100%"}}/>
                    </div>
                </div>                
            </div>

            <div class="statsContainer">
                <div class="statItem">
                    <div class="statImageContainer">
                    <img src={TotalUser} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div class="statInfo">
                        <h3 class="statLabel">Total User</h3>
                        <h2 class="statValue">{totalUsers}</h2>
                    </div>
                </div>
                <div class="statItem">
                    <div class="statImageContainer">
                    <img src={TotalMalls} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div class="statInfo">
                        <h3 class="statLabel">Total Mall</h3>
                        <h2 class="statValue">{totalMalls}</h2>
                    </div>
                </div>
                <div class="statItem">
                    <div class="statImageContainer">
                    <img src={TotalStores} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div class="statInfo">
                        <h3 class="statLabel" >Total Store</h3>
                        <h2  class="statValue">{totalStors}</h2>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default Header;