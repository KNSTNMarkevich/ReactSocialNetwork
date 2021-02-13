import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
            <Dialogs
                updateNewMessageText={onMessageChange}
                addMessage={addMessage}
                dialogsPage = {state}
            />
    );
}

export default DialogsContainer;


