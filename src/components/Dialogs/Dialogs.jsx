import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs
        .map( dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))

    const messagesElements = props.state.messages
        .map( message => ( <Message message={message.message} id = {message.id}/>))

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
}

export default Dialogs;


