import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.state.posts
        .map( p => ( <Post message={p.message} likes={p.likesCount}/>));

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