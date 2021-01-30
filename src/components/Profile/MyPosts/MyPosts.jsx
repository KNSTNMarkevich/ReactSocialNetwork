import React, { Component } from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hello world!" likes = "15"/>
            <Post message="React Education" likes = "20"/>
        </div>
    );
}

export default MyPosts;