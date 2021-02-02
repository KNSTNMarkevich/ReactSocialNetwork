import React, { Component } from 'react';
import style from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://cdn.theculturetrip.com/wp-content/uploads/2013/04/rome-e1487329583205.jpg'></img>
            </div>
            <div className={style.descriptionBlock}>
                avarar+descr
            </div>
        </div>
    );
}

export default ProfileInfo;