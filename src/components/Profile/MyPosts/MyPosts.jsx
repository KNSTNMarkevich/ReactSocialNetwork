import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10)

const MyPosts = (props) => {


    const postElements = props.posts
        .map(p => (<Post message={p.message} key={p.id} likes={p.likesCount}/>));

    let addPost = (values) => {
        debugger;
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea} name="newPostText"
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'addPost'
})(AddPostForm)

export default MyPosts;