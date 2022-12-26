import React from 'react'

function PopUp(props) {

  function getScrollHeight(elm){
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
  }
  
  function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
    
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm)
  
    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
    elm.rows = minRows + rows
  }
  
  
  // global delegated event listener
  document.addEventListener('input', onExpandableTextareaInput)

  return (props.trigger) ? (
    <div className='popup'>
    <div className='popup__inner'>
      <div className='textArea'>

      <textarea class='ai__header-content__inputField' rows='7' data-min-rows='7' placeholder='Enter your reply here' autofocus value={props.post.postContent} onChange={(e) => props.updateForm({ postContent: e.target.value })}></textarea>
      </div>
    
    <div className='pop__inner_btns'>
    <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        <button 
                className='post-btn'
                type='button'
                onClick={props.submit}
                disabled={props.post.postContent < 1}
                >Post
                </button>
    </div>
    </div>
      </div>
  ): "";
}

export default PopUp