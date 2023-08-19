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
import {  useSelector } from 'react-redux';
import { setTotalStores } from '../../ReduxStore/storeReducer';
import "../../style/list2.css"

const Stores=()=>{
    const [StoreListData, setStoreListData]= useState([]);
    const totalStors = useSelector((state)=>state.StoreNumber.totalStores);


    const dispatch=useDispatch();

    useEffect(()=>{
        console.log("setHeaderFun called..............")
        dispatch(setHeader({headerTag:"Stores Management"}))  
      },[])

    useEffect ( () => {
        getStores()
      },[])

      const getStores = async()=>{
        try {           
            const response = await axios.get(`https://malldekho-service.onrender.com/stores`); 
            console.log("Response From Api......",response.data);
            if(response.data)
            {
                setStoreListData(response.data);
            }
        } catch (error) {
            console.log(error)
        }
}
 

  
const [isFundActive, setIsFundActive] = useState(true);
const navigate = useNavigate()
const addStore=()=>{
    navigate(`/app/addStores/${false}`);

}
const upadateStore=(id)=>{
    navigate(`/app/addStores/${id}`);
}

const deleteStore = async (id)=>{
    console.log(".......................................",id) 
try {
    const response = await axios.delete(`https://malldekho-service.onrender.com/users/${id}`)
    if(response.data){
        console.log("users data deleted succesful.....",response.data)
        dispatch(setTotalStores({ totalStores:--totalStors }))   

    }
} catch (error) {
    console.log(error)
}
}

return(
    <div className="mainMallContainer">

    <div className="mallheader">
        <h1 className="heading">STORES</h1>
        <div className="icons">
            <img src={Add} onClick={addStore} className="icon" />
            <img src={More} />
        </div>

    </div>

    <>
        {isFundActive === true ? (
            <>
                <div  className="content">
                    <Paper className="table-container ">
                        <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>checked</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Name</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Email</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Floor</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Mall ID</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {StoreListData.map((step, ind) => (
                                        <TableRow
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
                                            <TableCell align="center">{step.email}</TableCell>
                                            <TableCell align="center">{step.floor}</TableCell>
                                            <TableCell align="center">{step.mall}</TableCell>
                                            <TableCell align="center"><CloseIcon onClick={()=>deleteStore(step._id)} sx={{ color: 'red' }} /><CreateTwoToneIcon onClick={() => upadateStore(step._id)} sx={{ color: 'black',paddingLeft:"30px" }} /></TableCell>
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
)}

export default Stores;