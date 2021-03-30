import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength10 = maxLength(10)

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>))

    const messagesElements = props.dialogsPage.messages
        .map(message => (<Message message={message.message} key={message.id} id={message.id}/>))

    let addMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    //if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={style.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea} name="newMessageText"
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;


