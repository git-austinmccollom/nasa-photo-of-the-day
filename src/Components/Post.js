import React from "react";

export default function Post(props) {
    const post = props
    return (
        <div className='post'>
        <p>hello world</p>
        <img src={post.hdurl}/>
        </div>
    )
}