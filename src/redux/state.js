import {rerenderEntireTree} from "../render";



let state = {
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Artem', surname: 'Tereschenko', status: 'offline' },
            {id: 2, name: 'Karina', surname: 'Morozova', status: 'online' },
            {id: 3, name: 'Illia', surname: 'Bozhok', status: 'online' },
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;