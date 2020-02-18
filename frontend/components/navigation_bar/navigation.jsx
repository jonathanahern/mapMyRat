import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ user, logout }) => {
    let profileImg = null;
    {
        if (user && user.img_url !==  null) {
            profileImg = <img id="userProfile" src={user.img_url} alt="" />
        } else {
            profileImg = < img id="userProfile" src={window.userIconURL} />
        }
    }
    const userGreeting = () => (
        <>
            <div className="navBarLeft">
                <div>
                <Link to="/">
                    <div className="logo">
                        
                        <img src={window.ratIconURL} />
                        <div>
                            <span>M</span><span>A</span><span>P</span><span>M</span><span>Y</span><span>R</span><span>A</span><span>T</span>
                        </div>

                    </div>
                </Link>
                </div>
                <div>
                    <Link to="/tours/create" id="navLink">
                        CREATE TOUR
                    </Link>
                </div>
            </div>


            <div id="profile">
                {profileImg}
                <ul className="profileMenu">
                    <li onClick={logout}>
                        Log Out
                    </li>
                </ul>
            </div>
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

    const nologoutLinks = () => {

        <Link to="/">
            <div className="logo">
                <img src={window.ratIconURL} />
                <div>
                    <span>M</span><span>A</span><span>P</span><span>M</span><span>Y</span><span>R</span><span>A</span><span>T</span>
                </div>

            </div>
        </Link>
    }

    // let loggingIn = false;
    // let site = window.location.href;
    // let num = 0;
    // console.log(Math.random());
    // if (site.includes('/login') || site.includes('/signup')){
    //     loggingIn = true;
    // }

    if (user) {
        return userGreeting();
    } else {
        return logoutLinks();
        // if (loggingIn){
        //     return logoutLinks();
        // } else {
        //     return nologoutLinks();
        // }
    }
};

export default Greeting;
