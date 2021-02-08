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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._subscrbier(this._state);
    // },
    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._subscrbier(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._subscrbier(this._state)
    // },
    // updateNewMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._subscrbier(this._state);
    // },

    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._subscrbier(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._subscrbier(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._subscrbier(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._subscrbier(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const updateNewMessageTextActionCreator = (text) => {
    return  {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}


export default store;