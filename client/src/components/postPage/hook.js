import React from 'react'
import { useState, useEffect } from 'react';

async function Listener(props){
    const [posts, setPosts] = useState([]);
    console.log('yo')
    useEffect(() => {
      async function getPosts() {
        const response = await fetch(`http://localhost:5000/posts/${props._id}`);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        
        const posts = await response.json();
        setPosts(posts);
      }
      console.log(posts, "inm async")
      getPosts();
      return;
    }, [posts.length]);
    console.log(posts, "sdsfjldsjfk")
    return(
        posts
    )
}

export default Listener