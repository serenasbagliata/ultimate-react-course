import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MenuIcon />
      <h1 style={{ margin: "20px" }}>Events</h1>
    </AppBar>
  );
}
