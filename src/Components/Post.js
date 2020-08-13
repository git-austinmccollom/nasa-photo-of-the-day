import React from "react";
import './Posts.css';

export default function Post(props) {
    const {post} = props
    return (
        <div className='post'>
            <p>{post.title}</p>
            <img src={post.hdurl}/>
            <p>Copyright: {post.copyright}</p>
            <p className='explanation'>{post.explanation}</p>
        </div>
    )
}