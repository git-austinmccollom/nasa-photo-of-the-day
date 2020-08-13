import React from "react";

export default function Post(props) {
    const {post} = props
    console.log(post.title)
    return (
        <div className='post'>
            <p>hello world?</p>
            <p>{post.title}</p>
            {/* <img src={`${hdurl}`}/> */}
        </div>
    )
}