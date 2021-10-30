import React from 'react'
import "../Style/Sidebar.css"
import logo from "../logo.png"
import { IoTimeOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePhone,HiOutlineCollection } from "react-icons/hi";

function Sidebar() {
  var today = new Date();
  var date = today.getDate() + ":" + today.getMonth() + ":" + today.getFullYear()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav_pages">
        <Link to="/home">
          <HiOutlineHome className="icon"/>
          <p>Home</p>
        </Link>
        <Link to="/about">
          <HiOutlineCollection className="icon"/>
          <p>About</p>
        </Link>
        <Link  to="/contact">
          <HiOutlinePhone className="icon"/>
          <p>Contact</p>
        </Link>
      </div>


      <div className="current_time">
        <div className="date_now">
          <IoCalendarNumberOutline className="icon"/>
          <p>{date}</p>
        </div>
        <div className="time_now">
          <IoTimeOutline className="icon"/>
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
