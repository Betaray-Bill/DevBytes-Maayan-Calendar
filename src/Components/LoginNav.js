import React from 'react'
import "../Style/LoginNav.css"
import logo from "../logo.png"
import { BrowserRouter as Router, Link} from "react-router-dom";

function LoginNav() {
    return (
        <div className="login_nav">
            <div className="loginNav_section">
                <div className="logo_section">
                    <div className="logoNav_img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo_name">
                        <h3>Maayan Calendar</h3>
                    </div>
                </div>
                <div className="loginNav_right">
                    <div className="about">
                        {/* <a href="#about">About</a> */}
                        <Link to="/about">About</Link>
                    </div>
                    <div className="admin_btn">
                        <a href="#admin_section">Admin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginNav
