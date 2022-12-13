import React from 'react'
import './popUp.css'

function PopUp(props) {
  const handleSubmitComment = (event) => {
    event.preventDefault();
    props.setReply('')
    
}






  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup__inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        <input
                aria-label='Add a comment'
                autoComplete='off'
                type = 'text'
                placeholder='Add a comment here'
                value={props.reply}
                onChange = {({target}) => props.setReply(target.value)}
                />
        </div>
    </div> 
  ): "";
}

export default PopUp