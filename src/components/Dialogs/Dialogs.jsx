import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))

    const messagesElements = props.dialogsPage.messages
        .map(message => (<Message message={message.message} id={message.id}/>))


    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
            <div className={style.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}
                />
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Dialogs;


