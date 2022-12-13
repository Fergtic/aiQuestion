import React from 'react'
import { useState, useEffect } from 'react';

const Listener = () => {
    const [posts, setPosts] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getPosts() {
        const response = await fetch(`http://localhost:5000/posts`);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        
        const posts = await response.json();
        setPosts(posts);
      }
    
      getPosts();
      console.log(posts)
      return;
    }, [posts.length]);

    return(
        {posts}
    )
}

export default Listener