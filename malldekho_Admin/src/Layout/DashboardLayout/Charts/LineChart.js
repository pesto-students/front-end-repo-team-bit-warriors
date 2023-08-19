import * as React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
    {
        name: "jan",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "feb",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "mar",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "apr",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "may",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "jun",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "jul",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const data2 = [
    {
        name: "jan",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "feb",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "mar",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "apr",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "may",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "jun",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "jul",
        pv: 4300,
    }
];

export default function LineChartData() {
    return (
        <div style={{ backgroundColor: "#efe0ff", borderRadius: "15px", alignItems: "center", justifyContent: "center", display: "flex",height:"100%" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
            <div>
            <LineChart width={500} height={100} data={data}>
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#6C13B3" dot={false} strokeWidth={3} />
            </LineChart>
            <LineChart width={500} height={100} data={data2}>
                <XAxis dataKey="name" axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#6AD2FF" dot={false} strokeWidth={3} />
            </LineChart>
            </div>
        </div>
    );
}