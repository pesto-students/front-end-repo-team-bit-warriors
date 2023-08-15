import React from "react";
import more_vert from "../../../Images/more_vert.svg"
import Profile from "../../../Images/profile.jpg"
import Add from "../../../Images/ADD.svg";
import { useNavigate } from "react-router-dom"



const AdminMembers=()=>{
    const navigate = useNavigate();


    const addAdmin=()=>{
        navigate(`/app/addAdmin`);
    }
    return(
        <>
        <div  style={{backgroundColor:"#efe0ff" ,height:"400px",marginBottom:"10px",paddingTop:"30px",borderRadius:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
            <div style={{display:"-webkit-inline-flex"}}>
            <p style={{fontSize:30,fontFamily:"popins",marginLeft:"20px"}}>Admin Members</p>
            <img src={Add} onClick={addAdmin} style={{marginLeft:"20px",paddingTop:"5px"}}/>
            </div>


            <div style={{display:"flex", backgroundColor:"white",margin:"20px 20px 0px 20px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"10px"}}>
                <div style={{height:"46px",width:"46px",backgroundColor:"red",borderRadius:"23px",margin:"10px 0px 10px 40px",overflow:"hidden"}}>
                    <img src={Profile} style={{height:"100%",width:"100%"}}/>
                </div>
                <p style={{display:"inline",marginLeft:"40px"}}>Mamta Gupta</p>
                {/* <img src={more_vert} style={{marginLeft:"130px"}}/> */}
            </div>

            <div style={{display:"flex", backgroundColor:"white",margin:"20px 20px 0px 20px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"10px"}}>
                <div style={{height:"46px",width:"46px",backgroundColor:"red",borderRadius:"23px",margin:"10px 0px 10px 40px",overflow:"hidden"}}>
                <img src={Profile} style={{height:"100%",width:"100%"}}/>
                </div>
                <p style={{display:"inline",marginLeft:"40px"}}>Hiren Jethva</p>
                {/* <img src={more_vert} style={{marginLeft:"130px"}}/> */}
            </div>

            <div style={{display:"flex", backgroundColor:"white",margin:"20px 20px 0px 20px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"10px"}}>
                <div style={{height:"46px",width:"46px",backgroundColor:"red",borderRadius:"23px",margin:"10px 0px 10px 40px",overflow:"hidden"}}>
                <img src={Profile} style={{height:"100%",width:"100%"}}/>
                </div>
                <p style={{display:"inline",marginLeft:"40px"}}>Rahul Shende</p>
                {/* <img src={more_vert} style={{marginLeft:"130px"}}/> */}
            </div>
            
        </div>
        </>
    )

}

export default AdminMembers;