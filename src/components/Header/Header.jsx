import React, {Component} from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.login}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
                        : <NavLink to='/login'>
                        Login
                    </NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;