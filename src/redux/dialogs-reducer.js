const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case ADD_MESSAGE:
            let body = state.newMessageText;
            let newMessage = {
                id: 4,
                message: body
            }
            state.newMessageText = '';
            state.messages.push(newMessage)
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return  {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export default dialogsReducer