import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 15},
        {id: 2, message: 'React Education', likesCount:20},
    ],
    profile: null,
    status: ''
}

it("length of posts after adding are incremented", () => {
    //1. data
    let action = addPostActionCreator("newPostText")

    //2. action
    let newState = profileReducer(state, action)

    //3. expect
    expect(newState.posts.length).toBe(3);
});

it("length of posts after delete are decremented", () => {
    //1. data
    let action = deletePost(2)

    //2. action
    let newState = profileReducer(state, action)

    //3. expect
    expect(newState.posts.length).toBe(1);
});
it("incorrect value, after deleting length od posts should be save", () => {
    //1. data
    let action = deletePost(100000)

    //2. action
    let newState = profileReducer(state, action)

    //3. expect
    expect(newState.posts.length).toBe(2);
});