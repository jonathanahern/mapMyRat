import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {

    return(
        <div id="footer-container">
            <div>
                <img id="rat-footer" src={window.ratFooterURL} alt="Sourced from http://pngimg.com"/>
                <div>
                    <h4>Social</h4>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Angelist</li>
                    </ul>
                </div>
                <div>
                    <h4>Help</h4>
                    <ul>
                        <li>Login</li>
                        <li>Google</li>
                        <li>Stackoverflow</li>
                    </ul>
                </div>
                <div>
                    <h4>About Me</h4>
                    <ul>
                        <li>Portfolio</li>
                        <li>Email</li>
                        <li>Skype</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
};

export default Footer;
