const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Bozhok'},
        {id: 2, name: 'Tereha'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Sava'},
        {id: 5, name: 'Voron'},
        {id: 6, name: 'Shendo'},
    ],
    messages: [
        {id: 1, message: 'Hi!..'},
        {id: 2, message: 'My Name is'},
        {id: 3, message: 'Slim Shady!'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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