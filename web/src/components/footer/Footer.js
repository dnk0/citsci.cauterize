import React from 'react';
import styles from './Footer.css';
import {Link, NavLink} from "react-router-dom";

const Footer = () => (
    <div id={"footer"}>
        <div className={"footer-content"}>
            <div className={"footer-container"}>
                <NavLink exact to={"/"}>Cauterize</NavLink>
                <div className={"nav"}>
                    <NavLink exact to={"/"}>About</NavLink>
                    <a href="https://github.com/dnk0/citsci.cauterize">Github</a>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;
