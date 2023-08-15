import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PieChartData from "./Charts/PaiChart";
import BarChartData from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import WeeklyDiscountBarChart from "./Charts/DiscountBarChart";
import { setHeader } from "../../ReduxStore/HeaderReducer";
import { useDispatch } from "react-redux";
import AdminMembers from "./Charts/AdminMembers";
const AdminDashboardPage=()=>{
  const dispatch=useDispatch();

  useEffect(()=>{
    setHeaderFun();
},[])

const setHeaderFun=()=>{

console.log("setHeaderFun called..............")
dispatch(setHeader({headerTag:"Dashboard Management"}))
  
}
return(
    <div style={{height:"600px",width:"95%",marginTop:"20px",marginLeft:"1%",borderRadius:"10px"}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}md={12} lg={6}  sm={12}>
            <BarChartData/>
        </Grid>
        <Grid item xs={12} md={12} lg={6}  sm={12}>
        <PieChartData/>
        </Grid>
        <Grid item xs={12} md={12} lg={7}  sm={12}>
        <LineChart/>
        </Grid>
        <Grid item xs={12} md={12} lg={5}  sm={12}>
        <WeeklyDiscountBarChart/>
        </Grid>
        <Grid item xs={12} md={4} lg={4}  sm={12}>
        <AdminMembers/>
        </Grid>
       
      </Grid>
    </Box>
    </div>
)
}

export default AdminDashboardPage;





