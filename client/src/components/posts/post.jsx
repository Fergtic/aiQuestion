import React from 'react'
import Content from './content'
import Reply from './reply'
import { ReactDOM } from 'react-dom'
import { Link } from 'react-router-dom'
import PopUp from '../replyPopup/popUp'
import { useState } from 'react'

const PostBody = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [reply, setReply] = useState('');

  console.log(reply);
  return (
    <div>
      <div className='test'>

        <div className='ai__post'>
        <div className='ai__post-content'>
        <p>Anonymous Posted 12mins ago:</p>
        <Content key={props.post._id} post={props}/>
        </div>
        
        <div className='ai__post-button'>
            <button type='button' onClick={() => setButtonPopup(true)}>Reply</button>
        </div>
        
        </div>
        <div className='ai__post-reply'>
        <Reply key={props.post._id} post={props} />
        </div>
        <PopUp key={props.post._id} post={props} trigger={buttonPopup} setTrigger={setButtonPopup} setReply={setReply}>
          <p> this is the popup </p>
        </PopUp>
      </div>
    </div>
  )
}

//<Link to='/t/test'>
//<div className='ai__post-button'>
//    <button type='button' onClick={() => setButtonPopup(true)}>Reply</button>
//</div>
//</Link>

export default PostBody