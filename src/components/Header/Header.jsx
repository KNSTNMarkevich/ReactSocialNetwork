import React, {Component} from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <img
                    src='https://lh3.googleusercontent.com/proxy/d5c_CghranGZZ2DlJBZijXUTjVw_FOIJuMSoQzY4IrkWIhSMXw68MYehdiCWkNz-266B1SfB72vm6xYXeLRioljR4OtUTqcDG2SqBPhBTFxfyo8XoJaeU2nObFDGfw'/>
                <div className={style.login}>
                    {props.isAuth ? props.login : <NavLink to='/login'>
                        Login
                    </NavLink>}

                </div>
            </div>

        </header>
    );
}

export default Header;