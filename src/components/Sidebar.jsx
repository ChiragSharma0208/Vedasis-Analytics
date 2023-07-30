import React from "react";
import "./Sidebar.css";
import shield from "../icons/shield.png";
import logo from "../icons/logo_png.png (1).png";
import hash from "../icons/hashtag.png";
import setting from "../icons/cogwheel.png";
import profile from "../icons/profile.png";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="images">
        <img src={logo} alt="logo" />
        <img src={shield} alt="shield" />
        <img src={hash} alt="hash" />
      </div>

      <div className="image">
        <img src={profile} alt="profile" />
        <img src={setting} alt="setting" />
      </div>
      <div></div>
    </div>
  );
}
