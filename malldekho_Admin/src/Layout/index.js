import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotesIcon from '@mui/icons-material/Notes';
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import home from "../Images/home.svg"
import Discount from "../Images/Discounts.svg"
import Logout from "../Images/Logout.svg"
import Network from "../Images/network.svg"
import Profile from "../Images/Profile.svg"
import MallDekho from "../Images/mallDekho.svg"
import { useNavigate } from "react-router-dom";
const toolsLinkArray = [
    {
        path: "tracker/dashboard",
        image: home,
        name: "DashBoard",
    },
    {
        path: "tracker/user",
        image: Network,
        name: "Users",
    },
    {
        path: "tracker/mall",
        image: Network,
        name: "Mall",
    },
    {
        path: "tracker/stores",
        image: Discount,
        name: "Stores",
    },
    {
        path: "profile",
        image: Profile,
        name: "Profile",
    },

];

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Dashboardlayout() {
    const navigate= useNavigate();

    useEffect(() => {
        console.log(" dashboard layput page")
    })
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout=()=>{
        localStorage.clear();
        navigate("/");

    }

    return (
        <>

            <Box sx={{ display: "flex" }}>

                <Drawer variant="permanent" open={open} style={{ backgroundColor: "green" }} >
                    {/* <h1 style={{marginLeft:"30px", visibility:open ? "" : "hidden"}}>Mall Dekho</h1> */}

                    <DrawerHeader style={{ marginTop: "20px" }}>
                        <div style={{ display: open ? "" : "none" }}>
                            <img src={MallDekho} />
                        </div>


                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                ...(open && { display: "none" }),
                            }}
                        >
                            <NotesIcon sx={{ color: "black" }} />
                        </IconButton>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{
                                ...(!open && { display: "none" }),
                            }}
                        >
                            {theme.direction === "rtl" ? (
                                <NotesIcon sx={{ color: "black" }} />
                            ) : (
                                <NotesIcon sx={{ color: "black" }} />
                            )}
                        </IconButton>
                    </DrawerHeader>


                    <p style={{ fontSize: "20px", fontFamily: "poppins", fontWeight: "600", color: "black", visibility: open ? "" : "hidden", paddingLeft: "60px", marginTop: "55px", backgroundColor: "rgba(176,174,247,0.738532913165266)" }}>MENU</p>

                    <div style={{marginTop:"35px"}}>

                        <List>
                            {toolsLinkArray.map((text, index) => (
                                <ListItem
                                    key={index}
                                    component={NavLink}
                                    to={text.path}
                                    className="secondary-nav-link"
                                    disablePadding
                                    sx={{
                                        display: "block",
                                        marginRight: open ? "12px" : "3px",
                                        paddingLeft: open ? "0px" : "7px",
                                    }}
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? "center" : "center",
                                            px: 1.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                // justifyContent: 'center',
                                            }}
                                        >
                                            <img src={text.image} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text.name}
                                            sx={{ opacity: open ? 1 : 0, color: "black" }}
                                        />

                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <List>
                            <ListItem
                                className="secondary-nav-link"

                                disablePadding
                                sx={{
                                    display: "block",
                                    marginRight: open ? "12px" : "3px",
                                    paddingLeft: open ? "0px" : "7px",
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "center" : "center",
                                        px: 1.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            // justifyContent: 'center',
                                        }}
                                    >
                                        <img src={Logout} onClick={handleLogout} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Logout"
                                        sx={{ opacity: open ? 1 : 0, color: "black" }}
                                    />

                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Grid cotainer>
                        <Grid
                            lg={12}
                            md={10}
                            sm={12}
                            xs={12}
                            sx={{
                                // backgroundColor: "#red",
                                // paddingTop: "20px",
                                // minHeight: "100vh",
                            }}
                        >
                            <Outlet />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
