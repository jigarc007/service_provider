import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  TextField,
  InputAdornment,
  Select,
  Divider,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import NotificationPanel from "./NotificationPanel";
import loginAvatar from "../assets/images/login_avatar.png";
const TopNavBar = () => {
  const [user, setUser] = useState("Saikumar");
  const handleChange = () => {};
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#FFF" }}
      className="bg-white shadow-lg py-[10px] px-[20px]"
    >
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <TextField
            // variant='outlined'
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex items-center gap-5">
          <NotificationPanel />
          <div className="flex items-center gap-3 b-l">
            <Avatar alt="User Avatar" src={loginAvatar} />
            <Divider />
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={user}
              variant="standard"
              onChange={handleChange}
              style={{ border: "none" }}
              label="User"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Saikumar"}>Saikumar</MenuItem>
              <MenuItem value={"Hiren"}>Hiren</MenuItem>
              <MenuItem value={"Ajay"}>Ajay</MenuItem>
            </Select>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
