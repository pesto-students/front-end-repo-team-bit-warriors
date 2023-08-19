import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "17",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "18",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "19",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "20",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "21",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
 
];

export default function WeeklyDiscountBarChart() {
  return (
    <div style={{ backgroundColor: "#efe0ff", borderRadius: "15px", alignItems: "center", justifyContent: "center", display: "flex",flexDirection:"column",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>

<p style={{fontSize:"25px",fontWeight:"700",fontFamily:"poppins",alignSelf:"start",marginLeft:"7rem"}}>Weekly Discounts</p>

    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}

    >
      <XAxis  dataKey="name" axisLine={false}/>
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#6C13B3" style={{borderRadius:"5px"}}/>
      <Bar dataKey="uv" stackId="a" fill="#6AD2FF" />
      <Bar dataKey="uv" stackId="a" fill="#A3AED0"  radius={[10, 10, 0, 0]}/>
    </BarChart>
    </div>
  );
}