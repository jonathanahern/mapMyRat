import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
    const userGreeting = () => (
        <>
            <h4>Welcome {user.first_name}</h4>
            <button onClick={logout}>Log Out</button>
        </>
    );

    const logoutLinks = () => (
        <>
       {/* "../../../app/assets/images/ratIcon3" */}
       <div className="logo">
                <img src="images/ratIcon3.png" alt="" />
                <div>
                    <span>M</span><span>A</span><span>P</span><span>M</span><span>Y</span><span>R</span><span>A</span><span>T</span>
                </div>
                
       </div>
            
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
