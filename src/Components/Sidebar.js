import React from 'react'
import "../Style/Sidebar.css"
import logo from "../logo.png"
import { IoTimeOutline } from "react-icons/io5";

function Sidebar() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>



      <div className="time">
        <IoTimeOutline className="icon"/>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Sidebar
