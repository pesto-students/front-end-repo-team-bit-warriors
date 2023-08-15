import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import {  useSelector } from 'react-redux';




const data01 = [
  { name: "Active", value: 200, fill: '#C681FD' },
  { name: "Non Active", value: 500, fill: '#6C13B3' },

];


export default function PieChartData() {
  // const totalUsers = useSelector((state)=>state.UserNumber.totalUsers);
  // const [activeuser, setActiveUser]= useState();
  // useEffect=(()=>{
    // getActiveUsers();
  // })

  // const getActiveUsers = async()=>{

  //   let response = await axios.get(`localhost:30001/users?active=1`)
  //   setActiveUser(response.data.length)


  // }
  return (
    <div style={{ backgroundColor: "#efe0ff", borderRadius: "15px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>

      <div style={{ display: "flex", }}>
        <p style={{ marginRight: "25rem", fontSize: "20px", color: "#C681FD", fontWeight: "700", fontFamily: "poppins" }}>Active User</p>
        <p style={{  fontSize: "20px", color: "#C681FD", fontWeight: "700", fontFamily: "poppins" }}>Monthly</p>
      </div>
      <PieChart width={300} height={220} >
        <Tooltip/>

        <Pie
          data={data01}
          dataKey="value"
          outerRadius={100}
          fill="#8884d8"
        />

      </PieChart>

        <div style={{width:"600px",height:"80px",backgroundColor:"white",marginBottom:"35px",borderRadius:"20px",display:"inline-flex",justifyContent:"space-around"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
          <label style={{color:"#C681FD"}}>active</label>
          <label style={{paddingLeft:"7px",fontSize:20}}>63%</label>
        </div>
        <div  style={{display:"flex",flexDirection:"column"}}>
          <label style={{color:"#C681FD"}}>non-active</label>
          <label style={{paddingLeft:"19px",fontSize:20}}>63%</label>
        </div>

      </div>
    </div>

  );
}


