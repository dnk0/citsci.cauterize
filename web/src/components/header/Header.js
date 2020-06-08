import React from 'react';
import styles from './Header.css';
import {NavLink} from 'react-router-dom';
import HeaderUserDisplay from "../../containers/header_user_display/HeaderUserDisplay";

const Header = () => (
    <div id={"header"}>
        <div className={"header-content"}>
            <div className={"logo"}>
                <NavLink exact to={"/"} activeClassName={"selected"}>
                    Cauterize
                </NavLink>
            </div>
            <HeaderUserDisplay />
        </div>
    </div>
)

export default Header;
