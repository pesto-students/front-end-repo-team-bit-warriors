// import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

const barColors = ['#4c5f7c', '#dc2424', '#fcda00', '#8383ba', '#23dbbd', '#8383ba', '#23dbbd'];

const arr = [{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T13:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T03:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T22:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-10T09:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T03:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T18:18:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T23:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T14 :37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},

{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T03:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T22:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-10T09:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T03:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T18:18:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T23:37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
},
{
  email: "mamta@me.com",
  joinedAt:  "2023-08-16T18:37:30.750Z",
  lastLoggedIn:"2023-08-19T14 :37:49.918Z",
  password:"$2b$10$6FaWtVRSZ4kTIOKp7IKbOeIpY/AtHzI5a0IkLYd.VR0chpBMdlUFm",
  username:"mamta",
  __v:0,
  _id:"64dd176a55054d618846861a"
}]

const data = [
  {
    name: "00",
    pv: 6400,
  },
  {
    name: "04",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "08",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "12",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "16",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "20",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "24",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const Data1=[ {
  name: "00",
  pv: 0,
},
{
  name: "04",
  pv: 0,
},
{
  name: "08",
  pv: 0,
},
{
  name: "12",
  pv: 0,
},
{
  name: "16",
  pv: 0,
},
{
  name: "20",
  pv: 0,
},
{
  name: "24",
  pv: 0,
}]

export default function BarChartData() {

  const[myArray,setMyArray]=useState(Data1)
  const [dailyTrafic, setdailyTrafic]=useState(0)
  // const [UserListData, setUserListData]= useState([]);
  const [today]= useState(new Date().getDate());
  
  useEffect(()=>{
  //  console.log("array data",arr[0].lastLoggedIn)
  //  let lastLoggedIn="2023-08-19T18:37:49.918Z"
  //  console.log("last Login date",new Date(lastLoggedIn).getUTCDate());
  
  //  let lastLog=new Date(lastLoggedIn).getUTCDate()



    // console.log("_________today date__________",new Date().getDate())

  //  let isoTimeString= "2023-08-12T06:36:06.565Z"
    //  let  parsedDate = new Date("2023-08-12T06:36:06.565Z")

    //  const day = parsedDate.getUTCDate();
    //  console.log("_________today date__________",day)
  //    const hours = parsedDate.getUTCHours();
  //    console.log("_________hours__________",hours)
  getUsers()
  // const condition = (element) => element.lastLoggedIn == new Date().getDate();

 
  },[])

  console.log(">>>>>>>>>>final Array>>>>>>>>",Data1)

  
const getUsers = async()=>{

  const filteredData = arr.filter((element) => new Date(element.lastLoggedIn).getUTCDate() == new Date().getDate());
  const count = filteredData.length;
  setdailyTrafic(count);
  console.log("filtredData",filteredData);
//   lastLoggedIn
// : 
// "2023-08-19T06:26:30.423Z"
    //     let  parsedDate = new Date("2023-08-19T06:26:30.423Z")


    //  const hours = parsedDate.getUTCHours();
    //  console.log("_________hours__________",hours)
    filteredData.map((element)=>{
      let  parsedDate = new Date(element.lastLoggedIn)
      let hours = parsedDate.getUTCHours();
      console.log(">>>>>>Hours",hours)
      if(hours<=4&&hours>1)
      {
        increaseValueById("04", 1)
      
      }
      if(hours>4&&hours<=8)
      {
        increaseValueById("08", 1)
      } 
      if(hours>8&&hours<=12)
      {
        increaseValueById("12", 1)
      }
      if(hours>12&&hours<=16)
      {
        increaseValueById("16", 1)
      }
      if(hours>16&&hours<=20)
      {
        increaseValueById("20", 1)
      }
      if(hours>20)
      {
        increaseValueById("24", 1)
      }
      if(hours<1)
      {
        increaseValueById("00", 1)
      }
     })


     const increaseValueById = (name, amount) => {
      // Create a copy of the original array
      const newArray = [...myArray];
  
      // Find the index of the object with the matching id
      const index = newArray.findIndex(item => item.name === name);
  
      if (index !== -1) {
        // Update the value property of the object
        newArray[index].pv += amount;
  
        // Set the state with the updated array
        setMyArray(newArray);
      }
    };

  // try {           
  //     const response = await axios.get(`https://malldekho-service.onrender.com/users`); 
  //     console.log("Response From Api......",response.data);
  //     if(response.data)
  //     {
  //         let Data = response.data
  //        let dailyTraaficArray = Data.filter((element)=>{
  //             checkActiveUser(element)
  //         })

  //         console.log("daily trafic Array",dailyTraaficArray);

  //         // dailyTraaficArray.map to push in to bar Array to show hourlyTrafic

  //     }
  //     function checkActiveUser(element){
  //       return ( new Date( element.lastLoggedIn).getUTCDate()==today)
  //     }
  // } catch (error) {
  //     console.log(error)
  // }

}


  return (
    <div style={{ backgroundColor: "#efe0ff", borderRadius: "15px", alignItems: "center", justifyContent: "center", display: "flex",flexDirection:"column",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
      <div style={{alignSelf:"start",marginTop:"30px",marginLeft:"45px"}}>
        <label style={{color:"#C681FD",fontSize:"20px",fontFamily:"DM Sans",fontWeight:"700"}}>Daily Traffic</label>
        <div>
            <label style={{fontSize:"40px",fontWeight:"600",fontFamily:"DM Sans", paddingRight:"10px"}}>{dailyTrafic}</label>
            <label style={{fontFamily:"poppins",fontSize:"20px",opacity:".7"}}>visitors</label>
        </div>
      </div>
      <BarChart
        width={500}
        height={300}
        data={Data1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={20}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" axisLine={false} />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <defs>
          {barColors.map((color, index) => (
            <linearGradient id={`colorUv${index}`} x1='0' y1='0' x2='0' y2='100%' spreadMethod='reflect'>
              <stop offset='0' stopColor={'rgba(198, 129, 253, 0.9)'} />
              <stop offset='1' stopColor={'rgba(198, 129, 253, 0.1)'} />
            </linearGradient>
          ))}
        </defs>

        <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
          ))}
        </Bar>
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </div>

  );
}
