import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 15},
                {id: 2, message: 'React Education', likesCount:20},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Artem', surname: 'Tereschenko', status: 'offline' },
                {id: 2, name: 'Karina', surname: 'Morozova', status: 'online' },
                {id: 3, name: 'Illia', surname: 'Bozhok', status: 'online' },
            ]
        }
    },
    _subscrbier(){
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscrbier = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._subscrbier(this._state);

    }

}

export default store;