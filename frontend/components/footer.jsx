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
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="https://github.com/jonathanahern">Github</a></li>
                        <li><a href="">Angelist</a></li>
                    </ul>
                </div>
                <div>
                    <h4>About Me</h4>
                    <ul>
                        <li><a href="https://futurefriend.portfoliobox.net">Portfolio</a></li>
                        <li><a href="mailto:jonathan@exquisitedupe.com">Email</a></li>
                        <li><a href="">Skype</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
};

export default Footer;
