import "./sidebar.css"
import PIC from "../../images/me.jpg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <img className="sidebarImg" src={PIC} alt="" />
        <p>Developer</p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}