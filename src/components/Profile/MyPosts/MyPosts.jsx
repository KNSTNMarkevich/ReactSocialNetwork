import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.state.posts
        .map( p => ( <Post message={p.message} likes={p.likesCount}/>));

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}  ></textarea>
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