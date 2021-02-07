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

    getState() {
        return this._state
    },

    setState(state) {
        this._state = state
    },

    _rerenderEntireTree(){
        console.log('State changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state)
    },

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }

}
//
// let rerenderEntireTree = () => {
//     console.log('State changed')
// }
//
// export let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hello world!', likesCount: 15},
//             {id: 2, message: 'React Education', likesCount:20},
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Bozhok'},
//             {id: 2, name: 'Tereha'},
//             {id: 3, name: 'Karina'},
//             {id: 4, name: 'Sava'},
//             {id: 5, name: 'Voron'},
//             {id: 6, name: 'Shendo'},
//         ],
//         messages: [
//             {id: 1, message: 'Hi!..'},
//             {id: 2, message: 'My Name is'},
//             {id: 3, message: 'Slim Shady!'},
//         ],
//         newMessageText: ''
//     },
//     sidebar: {
//         friends: [
//             {id: 1, name: 'Artem', surname: 'Tereschenko', status: 'offline' },
//             {id: 2, name: 'Karina', surname: 'Morozova', status: 'online' },
//             {id: 3, name: 'Illia', surname: 'Bozhok', status: 'online' },
//         ]
//     }
// }
//
// window.state = state;
//
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// };
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };
//
// export const addMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';
//     rerenderEntireTree(state)
// }
//
// export const updateNewMessageText = (newMessage) => {
//     state.dialogsPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;