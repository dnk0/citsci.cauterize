import React, {Fragment} from 'react';
import styles from './Header.css';
import {NavLink} from 'react-router-dom';

const HeaderAuthNav = () => {
    return (
        <Fragment>
            <NavLink exact to={"/"} activeClassName={"selected"}>ABOUT</NavLink>
            <NavLink exact to={"/auth/login"} activeClassName={"selected"}>LOGIN</NavLink>
            <NavLink exact to={"/auth/signup"} activeClassName={"selected"}>SIGNUP</NavLink>
        </Fragment>
    )
}
const HeaderUserInfo = (username, logout) => {
    return (
        <div>
            <a>
            {username}
            </a>
            <button onClick={(e) => {
                e.preventDefault()
                logout()
            }}>
                Logout
            </button>
        </div>
    )
}
const HeaderUserDisplay = ({auth, logout}) => (
    <div className={"nav"}>
        {auth.isLoggedIn ?
            HeaderUserInfo(auth.user.username, logout):
            HeaderAuthNav()
        }
    </div>
)

export default HeaderUserDisplay;
