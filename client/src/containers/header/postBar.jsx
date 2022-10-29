import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router";

const PostBar = () => {
  const [post, setPost] = useState({
      postContent: "",
    });

    // These methods will update the state properties.
    function updateForm(value) {
      return setPost((prev) => {
        return { ...prev, ...value };
      });
    }
    
    // This function will handle the submission.
    async function onSubmit(e) {
      e.preventDefault();
    
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newPost = { ...post };
      console.log(newPost);
      console.log("^");
    
      await fetch("http://localhost:5000/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setPost({ postContent: "" });
      window.location.reload(false);
    }
  return (
    <form onSubmit={onSubmit}>
    <div className='ai__header-content__input'>
          <input type='text' placeholder='Post your response here' value={post.postContent} onChange={(e) => updateForm({ postContent: e.target.value })}/>
              <button type='submit'> Post </button>
    </div>

    </form>
    
      
  )
}

export default PostBar