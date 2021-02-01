import React, {Component} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Hello world!" likes="15"/>
                <Post message="React Education" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;