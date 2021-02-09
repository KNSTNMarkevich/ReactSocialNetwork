import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) => {
    debugger;

    const postElements = props.posts
        .map(p => (<Post message={p.message} likes={p.likesCount}/>));

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;