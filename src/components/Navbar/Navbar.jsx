import React, {Component} from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SideBar from "../SideBar/SideBar";


const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={`${style.item} `}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}> News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.sideBar}>
                <SideBar state={props.sidebar}/>
            </div>
        </nav>
    );
}

export default Navbar;