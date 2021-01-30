import React, { Component } from 'react';
import style from './Post.module.css'


const Post = () => {
    return (
        <div className='posts'>
            <div className={style.item}>
                <img src='https://www.meme-arsenal.com/memes/3293222ac3dbaba76006c0b28cbb8b60.jpg' />
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;