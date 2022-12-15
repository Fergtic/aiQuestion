import React from 'react'
import './popUp.css'

function PopUp(props) {
  console.log(props.reply.replyContent)

  function updateForm(value) {
    return props.setReply((prev) => {
      return { ...prev, ...value };
    });
  }

  async function handleSubmitComment (event){
    event.preventDefault();
    
    const newReply = { ... props.reply};
    console.log(newReply)
    
    await fetch(`http://localhost:5000/comments/${props.post.post._id.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReply),
      
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    
    props.setReply('');
    window.location.reload(false);
}


  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup__inner'>
        <div className='pop__inner-inputField'>
        <input
                className='pop__inner-input'
                aria-label='Add a comment'
                autoComplete='off'
                type = 'text'
                placeholder='Add a comment here'
                value={props.reply.replyContent}
                onChange={(e) => updateForm({ replyContent: e.target.value })}
                
                />
        </div>
        <div className='pop__inner_btns'>

        <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        <button 
                className='post-btn'
                type='button'
                disabled={props.reply.replyContent < 1}
                onClick={handleSubmitComment}>
                        Post
                </button>
        </div>
        </div>
    </div> 
  ): "";
}

export default PopUp