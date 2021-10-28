import React from 'react'
import '../Style/Login.css';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase'
import LoginNav from './LoginNav';
import About from './About';
import Admin from './Admin';


function Login() {
    const provider = new GoogleAuthProvider();

    const signInwithGoogle  = () => {
        signInWithPopup(auth, provider)
    }

    return (
        <div className="login">
            <LoginNav />
            <div className="wrapper">
                <div className="web_name">
                    <h2>Maayan Calendar</h2>
                </div>
                {/* <div className="para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi atque! Non inventore enim dolore eveniet deserunt hic officiis vitae excepturi. Assumenda unde, minus soluta libero saepe nobis animi nisi.</p>
                </div> */}
                <div className="signIn_section">
                    <button 
                        className="btn-signIn"
                        onClick={signInwithGoogle}
                    >
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        Sign In with Google
                    </button>
                </div>
            </div>

            <div className="about" id="about">
                <About />
            </div>

            <div className="admin" id="admin_section">
                <Admin />
            </div>

        </div>
    )
}

export default Login
