import React, {Component} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hello world!', likesCount: 15},
        {id: 2, message: 'React Education', likesCount:20},
    ];

    const postElements = posts
        .map( p => ( <Post message={p.message} likes={p.likesCount}/>))

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
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;