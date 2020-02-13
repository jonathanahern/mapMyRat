import React from 'react';
import { Link } from "react-router-dom";


class Splash extends React.Component {

    render(){
        return (
            <>
                <div id="backgroundSplash">
                    <div className="contentSplash">
                        <hr align="right"/>   
                        <h1>MAP EVERY RAT</h1>
                        <hr align="right"/>
                        <p>The best mobile rat tracking experience, backed by the world's largest rat and rodent loving community.</p>
                        <Link to="/signup">
                            <button className="signupSplashButton">SIGN UP</button>
                        </Link>
                        <div>
                            <span>Already a member?</span>
                            <Link to="/signup">
                                <button className="loginSplashButton">LOG IN</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Splash;