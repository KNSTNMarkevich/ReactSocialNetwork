import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost, updateNewPostText, updateNewMessageText, subscribe} from './redux/state'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText = {updateNewPostText}
                 addMessage = {addMessage}
                 updateNewMessageText = {updateNewMessageText}
            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
