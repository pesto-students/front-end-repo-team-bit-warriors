import React, { useState, useEffect } from "react";
import { setHeader } from "../../ReduxStore/HeaderReducer";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Add from "../../../src/Images/ADD.svg";
import More from "../../../src/Images/More.svg";
import CloseIcon from '@mui/icons-material/Close';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { setTotalUsers } from '../../ReduxStore/userReducer';
import { useSelector } from 'react-redux';
import "../../style/list2.css"

const Mall = () => {
    const dispatch = useDispatch();
    const [MallListData, setMallListData] = useState([]);
    const totalUsers = useSelector((state) => state.UserNumber.totalUsers);
    useEffect(() => {
        console.log("setHeaderFun called..............")
        dispatch(setHeader({ headerTag: "Mall Management" }))
    }, [])

    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        try {
            const response = await axios.get(`https://malldekho-service.onrender.com/malls`);
            console.log("Response From Api......", response.data);
            if (response.data) {
                setMallListData(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const [isFundActive, setIsFundActive] = useState(true);
    const navigate = useNavigate()
    const AddMall = () => {
        navigate(`/app/addMalls/${false}`);
    }
    const upadateMall = (id) => {
        navigate(`/app/addMalls/${id}`);
    }
    const deleteMall = async (id) => {
        console.log(".......................................", id)
        try {
            const response = await axios.delete(`https://malldekho-service.onrender.com/malls/${id}`)
            if (response.data) {
                console.log("users data deleted succesful.....", response.data)
                dispatch(setTotalUsers({ totalUsers: --totalUsers }))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="mainMallContainer">
            <div className="mallheader">
                <h1 className="heading">MALLS</h1>
                <div className="icons">
                    <img src={Add} onClick={AddMall} className="icon" />
                    <img src={More} />
                </div>
            </div>
            <>
                {isFundActive === true ? (
                    <>
                        <div className="content">
                            <Paper className="table-container ">
                                <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow >
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>checked</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>Name</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>Address</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>Floors</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>Stores</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins", fontSize: 18, fontWeight: "300", backgroundColor: "rgba(186,120,203,0.8701855742296919) " }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {MallListData.map((step, ind) => (
                                                <TableRow
                                                    key={step._id}
                                                    sx={{ borderRadius: "10px", "&:hover": { bgcolor: "rgba(186,120,203,0.5701855742296919) ", scale: '101%', borderRadius: '8px' } }} key={ind}
                                                >
                                                    <TableCell align="center">
                                                        <Checkbox
                                                            name={step.Name}
                                                            value={step.Name}
                                                            inputProps={{ "aria-label": "controlled" }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">{step.name}</TableCell>
                                                    <TableCell align="center">{step.city}</TableCell>
                                                    <TableCell align="center">{step.floorsCount}</TableCell>
                                                    <TableCell align="center">{step.shopCount}</TableCell>
                                                    <TableCell align="center"><CloseIcon onClick={() => deleteMall(step._id)} sx={{ color: 'red' }} /><CreateTwoToneIcon onClick={() => upadateMall(step._id)} sx={{ color: 'black', paddingLeft: "30px" }} /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Paper>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <div>
                                    {/* <img src={defaultIMG} /> */}
                                </div>
                                <h1>No User</h1>
                            </div>
                        </div>
                    </>
                )}
            </>
        </div>
    )
}

export default Mall;