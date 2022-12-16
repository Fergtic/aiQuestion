import React from 'react'
import './postPage.css'
import { useParams } from 'react-router'
import Listener from './hook';
import Content from './content';
import Reply from './reply';
import { useEffect, useState } from 'react';


function PostPageIndex(props) {
  

  console.log(props._id, "yoyoyoyoyoy")
  console.log("yo")


  return (
     <div>
      <div className='ai__postPage'>
        <div className='ai__postPage-container'>
          <div className='ai__postPage-content'>
            <p>Anonymous: 12 minutes ago</p>
            <Content key={props.post._id} post={props.post}/>
           </div>
        </div>
        </div>
      </div>
  )
}

export default PostPageIndex



//<div className='ai__postPage'>
//<div className='ai__postPage-container'>
//  <div className='ai__postPage-content'>
//    <p>Anonymous: 12 minutes ago</p>
//    <Content key={post._id} post={post}/>
//  </div>
//</div>
//<div className='ai__postPage-replies'>
//<Reply key={post._id} post={post}/>
//</div>
//</div>


//function PostPage() {
//  const [post, setPost] = useState();
//  const postId = useParams();
//  useEffect(() => {
//    const post = Listener(postId)
//    setPost(post)
//
//  }, [])
//  console.log(post)
//  const listReplies = post.replies.map((reply) => <Reply key={post._id} reply={reply}/>)
//  console.log("yo")
//
//
//  return (
//     <div>
//      {!post.replies ? (
//        <div className='ai__postPage'>
//          <div className='ai__postPage-container'>
//            <div className='ai__postPage-content'>
//              <p>Anonymous: 12 minutes ago</p>
//              <Content key={post._id} post={post}/>
//            </div>
//          </div>
//          </div>
//        ) : post.replies.length > 0 ?(
//          <div className='ai__postPage'>
//          <div className='ai__postPage-container'>
//            <div className='ai__postPage-content'>
//              <p>Anonymous: 12 minutes ago</p>
//              <Content key={post._id} post={post}/>
//            </div>
//            <div className='ai__postPage-replies'>
//            {listReplies}
//            </div>
//          </div>
//          </div>
//        
//      
//      ) : (
//        <div>
//          <p>yto</p>
//        </div>
//      )
//
//    }
//      </div>
//  )
//}
//
//export default PostPage