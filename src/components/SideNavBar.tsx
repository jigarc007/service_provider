import React, { useState } from "react";
import { List, ListItemButton, ListItemIcon, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import AssessmentIcon from "@mui/icons-material/AssessmentOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const SideNavBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();
  const navItems = [
    {
      id: "home",
      icon: <HomeIcon style={{ fill: "#000" }} />,
      tooltip: "Home",
    },
    {
      id: "Contact",
      icon: <MessageIcon style={{ fill: "#000" }} />,
      tooltip: "Contact",
    },
    {
      id: "assessment",
      icon: <AssessmentIcon style={{ fill: "#000" }} />,
      tooltip: "Assessment",
    },
    {
      id: "help",
      icon: <HelpOutlineIcon style={{ fill: "#000" }} />,
      tooltip: "Help",
    },
    {
      id: "settings",
      icon: <SettingsOutlinedIcon style={{ fill: "#000" }} />,
      tooltip: "Settings",
    },
  ];
  const handleClick = (id: string) => {
    console.log("clicked");
    setActiveItem(id);
    navigate(id === "home" ? "/" : "/main_dashboard");
  };
  return (
    <div className="h-screen fixed left-0 top-0 flex flex-col py-4 gap-10 bg-white">
      <List className="">
        <ListItemButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2px",
          }}
          onClick={() => {
            console.log("home clicked------------>");
            navigate("/");
          }}
        >
          <ListItemIcon className="flex justify-center items-center min-w-0">
            <MenuIcon style={{ fill: "#000" }} />
          </ListItemIcon>
        </ListItemButton>
      </List>

      <List className="flex flex-col gap-5">
        {navItems.slice(0, 3).map((item) => (
          <Tooltip key={item.id} title={item.tooltip} placement="right">
            <ListItemButton
              style={{
                backgroundColor: activeItem === item.id ? "#e5e5e5" : "",
                borderLeft: activeItem === item.id ? "6px solid #000" : "",
                height: "72px",
              }}
              className={`
                hover:bg-[#e5e5e5]
                      flex justify-center items-center mb-2 ${
                        activeItem === item.id ? "bg-blue-100" : ""
                      }`}
              onClick={() => handleClick(item.id)}
            >
              <ListItemIcon className="flex justify-center items-center">
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
      <List className="flex flex-col gap-5 ">
        {navItems.slice(3).map((item) => (
          <Tooltip key={item.id} title={item.tooltip} placement="right">
            <ListItemButton
              style={{
                backgroundColor: activeItem === item.id ? "#e5e5e5" : "",
                borderLeft: activeItem === item.id ? "6px solid #000" : "",
                height: "72px",
              }}
              className={`
                hover:bg-[#e5e5e5]
                flex justify-center items-center mb-2 ${
                  activeItem === item.id ? "bg-blue-100" : ""
                }`}
              onClick={() => handleClick(item.id)}
            >
              <ListItemIcon className="flex justify-center items-center">
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </div>
  );
};

export default SideNavBar;
