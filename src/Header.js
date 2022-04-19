import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/*Left Header Section */}
      <div className="header-left">
        <MenuSharpIcon />
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      {/* Middle Header Section */}
      <div className="header-input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header-input-button" />
      </div>

      {/* Right Header Section */}
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          alt="avatar icon"
          src="https://avatars.githubusercontent.com/u/91019894?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
