import React from 'react';
import style from './SideBarFriends.module.css'


const SideBarFriends = (props) => {
    return (
        <div className={style.content}>
            <div>
                <div className={style.avatar}></div>
                <div className={style.name}>
                    {props.name} {props.surname}
                </div>
                <div className={style.status}>
                    {props.status}
                </div>
            </div>
        </div>
    );
}

export default SideBarFriends;