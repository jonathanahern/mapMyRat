import React from 'react';

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
                        <button className="signupSplashButton">SIGN UP</button>
                        <div>
                            <span>Already a member?</span>
                            <button className="loginSplashButton">LOG IN</button>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Splash;