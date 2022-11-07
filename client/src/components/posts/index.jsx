import React from 'react'
import { useRef, useState, useEffect } from 'react';
import './post.css'
import CreatePost from '../../services/mongoDB';
import Listener from './hook';
import Skeleton from 'react-loading-skeleton'
import Content from './content';
import PostBody from './post';
export default function Post() {
    const {posts} = Listener()
    
    
    
    return (
      <div>
      {!posts ? (
        <Skeleton count={4} width={640} height={500}/>
        ) : posts?.length > 0 ?(
          
        posts.map((post) => <PostBody key={post._id} post={post}/>)
      
      ) : (
        <p>no posts today</p>
      )

    }
      </div>
    );
   }
