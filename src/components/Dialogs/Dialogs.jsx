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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name='Bozhok' id='1'/>
                <DialogItem name='Tereha' id='2'/>
                <DialogItem name='Karina' id='3'/>
                <DialogItem name='Sava' id='4'/>
                <DialogItem name='Voron' id='5'/>
                <DialogItem name='Shendo' id='6'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi!..'/>
                <Message message='My Name is'/>
                <Message message='Slim Shady!'/>
            </div>
        </div>
    );
}

export default Dialogs;


