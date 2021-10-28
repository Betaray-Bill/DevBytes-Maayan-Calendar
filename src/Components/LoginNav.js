import React from 'react'
import "../Style/LoginNav.css"
import logo from "../logo.png"

function LoginNav() {
    return (
        <div className="login_nav">
            <div className="loginNav_section">
                <div className="logo_section">
                    <div className="logoNav_img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo_name">
                        <p>Code Club Calendar</p>
                    </div>
                </div>
                <div className="loginNav_right">
                    <div className="about">
                        <a href="#about">About</a>
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
