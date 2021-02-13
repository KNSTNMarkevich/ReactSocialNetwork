import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return <Dialogs
                    updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={state}
                />
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;


