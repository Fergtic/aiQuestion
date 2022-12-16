import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import Listener from './hook';
import PostPageIndex from '.';


function PostPage() {
 const [post, setPost] = useState();
 console.log('main page')
 const postId = useParams();
    console.log('above async')
    async function getPost(){
        const posts = await Listener(postId)
        setPost(posts)
        console.log('async')
    }
    getPost()
 console.log(post,"whats going on")
 console.log("yo")




  return (
    <PostPageIndex key={post._id} post={post}/>
  )
}

export default PostPage