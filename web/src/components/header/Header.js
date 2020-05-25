import React from 'react';
import styles from './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div id={"header"}>
        <div className={"header-content"}>
            <div className={"logo"}>
                <NavLink exact to={"/"} activeClassName={"selected"}>
                    Cauterize
                </NavLink>
            </div>
            <div className={"nav"}>
                <NavLink exact to={"/"} activeClassName={"selected"}>ABOUT</NavLink>
                <NavLink exact to={"/auth/login"} activeClassName={"selected"}>LOGIN</NavLink>
                <NavLink exact to={"/auth/signup"} activeClassName={"selected"}>SIGNUP</NavLink>
            </div>
        </div>
    </div>
)

export default Header;
