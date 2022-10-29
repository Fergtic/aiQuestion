import React from 'react'
import Content from './content'

const PostBody = (props) => {
  return (
    <div>
        <div className='ai__post'>
        <div className='ai__post-content'>
        <p>Anonymous Posted 12mins ago:</p>
        <Content key={props.post._id} post={props}/>
        </div>
        <div className='ai__post-button'>
            <button type='button'>Reply</button>
        </div>
        </div>
    </div>
  )
}

export default PostBody