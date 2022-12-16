import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router";
import PopUp from './popUp';

const PostBar = () => {
  const [post, setPost] = useState({
      postContent: "",
    });
  const [buttonPopup, setButtonPopup] = useState(false);

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
    <div>

    <div className='ai__header-content__input'>
    
        <button type='button' onClick={() => setButtonPopup(true)}> Post your response </button>
    </div>
    <PopUp updateForm={updateForm} setPost={setPost} post={post} trigger={buttonPopup} setTrigger={setButtonPopup} submit={onSubmit}>
    <p> this is the popup </p>
    </PopUp>
    </div>

    
      
  )
}

export default PostBar