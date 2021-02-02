import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";

const posts = [
    {id: 1, message: 'Hello world!', likesCount: 15},
    {id: 2, message: 'React Education', likesCount:20},
];

const postElements = posts
    .map( p => ( <Post message={p.message} likes={p.likesCount}/>));



const dialogs = [
    {id: 1, name: 'Bozhok'},
    {id: 2, name: 'Tereha'},
    {id: 3, name: 'Karina'},
    {id: 4, name: 'Sava'},
    {id: 5, name: 'Voron'},
    {id: 6, name: 'Shendo'},
];

const dialogsElements = dialogs
    .map( dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))



const messages = [
    {id: 1, message: 'Hi!..'},
    {id: 2, message: 'My Name is'},
    {id: 3, message: 'Slim Shady!'},
];

const messagesElements = messages
    .map( message => ( <Message message={message.message} id = {message.id}/>))




ReactDOM.render(
  <React.StrictMode>
    <App postElements = {postElements} dialogsElements = {dialogsElements} messagesElements = {messagesElements}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
