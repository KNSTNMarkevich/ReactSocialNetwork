import React, {Component} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    const postData = [
        {id: 1, message: 'Hello world!', likesCount: 15},
        {id: 2, message: 'React Education', likesCount:20},
    ];

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
                <Post message={postData[0].message} likes={postData[0].likesCount}/>
                <Post message={postData[1].message} likes={postData[1].likesCount}/>            </div>
        </div>
    );
}

export default MyPosts;