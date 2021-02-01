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

    const dialogs = [
        {id: 1, name: 'Bozhok'},
        {id: 2, name: 'Tereha'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Sava'},
        {id: 5, name: 'Voron'},
        {id: 6, name: 'Shendo'},
    ];

    const dialogsElements = dialogs
        .map( dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))

    const messages = [
        {id: 1, message: 'Hi!..'},
        {id: 2, message: 'My Name is'},
        {id: 3, message: 'Slim Shady!'},
    ];

    const messagesElements = messages
        .map( message => ( <Message message={message.message} id = {message.id}/>))

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;


