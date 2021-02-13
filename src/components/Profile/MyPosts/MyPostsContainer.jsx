import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div>
            <MyPosts newPostText={state.profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={onPostChange}
                     posts={state.profilePage.posts}
            />
        </div>
    );
}

export default MyPostsContainer;