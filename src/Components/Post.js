import React from "react";
// import './Posts.css';

import styled from 'styled-components'

const StyledPost = styled.div`
    box-sizing: border-box;
    width: 50%;
    border: 1px solid rgba(var(--b6a,219,219,219),1);;
    border-radius: 20px;
    background-color: white;
    .title {

    }
    img {
        max-width: 100%;
        max-height: 100%;
    }

    .explanation {
        text-align: left;
        padding: 1%;
    }
    
`

export default function Post(props) {
    const {post} = props
    return (
        <StyledPost>
            <h2 className="title">{post.title}</h2>
            <img src={post.hdurl}/>
            <p>Copyright: {post.copyright}</p>
            <p className='explanation'>{post.explanation}</p>
        </StyledPost>
    )
}