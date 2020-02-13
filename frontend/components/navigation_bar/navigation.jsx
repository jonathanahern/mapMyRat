import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../app/assets/images/ratIcon.png";


const Greeting = ({ user, logout }) => {
    const userGreeting = () => (
        <>
            <h4>Welcome {user.first_name}</h4>
            <button onClick={logout}>Log Out</button>
        </>
    );

    const logoutLinks = () => (
        <>
            <Link to="/">
        <div className="logo">
                <img src={window.ratIconURL} />
                <div>
                    <span>M</span><span>A</span><span>P</span><span>M</span><span>Y</span><span>R</span><span>A</span><span>T</span>
                </div>
                    
        </div>
        </Link>
            
        <div>
            <Link to="/login">
                <button className="loginNav" type="button">
                LOG IN
                </button>
            </Link>

            <Link to="/signup">
                <button className="signupNav" type="button">
                    SIGN UP
                </button>
            </Link>
        </div>
        </>
    );

    if (user) {
        return userGreeting();
    } else {
        return logoutLinks();
    }
};

export default Greeting;
