import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: 'Bozhok'},
        {id: 2, name: 'Tereha'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Sava'},
        {id: 5, name: 'Voron'},
        {id: 6, name: 'Shendo'},
    ];

    const messagesData = [
        {id: 1, message: 'Hi!..'},
        {id: 2, message: 'My Name is'},
        {id: 3, message: 'Slim Shady!'},
    ];


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} id = {messagesData[0].id}/>
                <Message message={messagesData[1].message} id = {messagesData[1].id}/>
                <Message message={messagesData[2].message} id = {messagesData[2].id}/>
            </div>
        </div>
    );
}

export default Dialogs;


