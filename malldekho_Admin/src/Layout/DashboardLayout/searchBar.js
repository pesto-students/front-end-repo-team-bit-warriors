import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        // p: "-10px 4px",
        display: "flex",
        alignItems: "center",
        width: 216,
        height: 38,
        borderRadius: 30,
        backgroundColor: "rgba(176,174,247,0.738532913165266)"
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton type="button"  aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
