const ADD_MESSAGE = 'ADD-MESSAGE';

type initialStateType = {
    dialogs: Array<{id: number, name: string}>,
    messages: Array<{id: number, message: string}>
}
type getMessageActionType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}
let initialState:initialStateType = {
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
    ]
}

const dialogsReducer = (state = initialState, action : any):initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id:   4, message: body}]
            };
        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText : string): getMessageActionType => {
    return {type: ADD_MESSAGE, newMessageText}
}

export default dialogsReducer