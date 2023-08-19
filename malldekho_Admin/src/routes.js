import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Layout/DashboardLayout/Header";
import Demo2 from "./Layout/DashboardLayout/demo2";
import Dashboardlayout from "./Layout";
import AdminDashboardPage from "./Layout/DashboardLayout/AdminDashboardPage";
import Mall from "./Layout/DashboardLayout/Mall";
import UserList from "./Layout/DashboardLayout/UserList";
import Stores from "./Layout/DashboardLayout/Stores";
import Profile from "./Layout/DashboardLayout/Profile";
import AddUsers from "./Layout/DashboardLayout/AddUser";
import AddMall from "./Layout/DashboardLayout/AddMall";
import AddStores from "./Layout/DashboardLayout/AddStore";
import AddAdmin from "./Layout/DashboardLayout/AddAdmin";
import LoginPage from "./Login&Register/AdminLogin";
import RegisterPage from "./Login&Register/AdminRegister";
import Cookies from 'js-cookie';
import SecureLS from "secure-ls";

export const Router = () => {
    var ls= new SecureLS();
    
    let isUserLoggedIn = ls.get("isUserLoggedIn");
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate("/");
        } else {
            navigate("/app/tracker")
        }
    }, [isUserLoggedIn]);

    return (
        <>
            <Routes>
                {isUserLoggedIn ? (
                    <Route path="/app" element={<Dashboardlayout />}>
                        <Route path="tracker" element={<Header />}>
                            <Route index  element={<UserList />} />
                            {/* <Route index element={<AdminDashboardPage />} /> */}
                            <Route path="dashboard" element={<AdminDashboardPage />} />
                            <Route path="user" element={<UserList />} />
                            <Route path="mall" element={<Mall/>} />
                            <Route path="stores" element={<Stores/>} />

                        </Route>
                        <Route path="profile" element={<Profile/>} />
                        <Route path="addUsers/:parameter" element={<AddUsers/>} />
                        <Route path="addMalls/:parameter" element={<AddMall/>} />
                        <Route path="addStores/:parameter" element={<AddStores/>} />
                        <Route path="addAdmin" element={<AddAdmin/>} />
                    </Route>
                ) : (
                    
                    <Route>
                    <Route  path="/" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    </Route>


                )}

                {/* <Route path="*" element={<ErrorPage />}></Route> */}
            </Routes>
        </>
    );
};
