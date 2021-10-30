import React from 'react'
import "../Style/Admin.css"

function Admin() {
    return (
        <div className="admin">
            <h2>Admin</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis non aliquam cupiditate provident, similique earum iusto aut. Iure, animi?</p>
            <div className="admin_wrapper">
                <div className="admin_img">
                    <img src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif" alt="" />
                </div>
                <div className="admin_head">
                    <h2>Admin Sign In </h2>
                    <div className="admin_form">
                        <div className="admin_email">
                            <label>Email : </label>
                            <input type="text" placeholder="Enter Admin email..." id="" />
                        </div>
                        <div className="admin_pass">
                            <label>Password : </label>
                            <input type="password" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
