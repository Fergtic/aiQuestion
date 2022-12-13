import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Reply = (props) => {

  
  return (
  <div>
      {!props.post.post.replies ? (
        <p>Reply to this post!</p>
        ) : props.post.post.replies?.length > 0 ?(
          
        <p>Anonymous: {props.post.post.replies[0]}</p>
      
      ) : (
        <p>Reply to this post!</p>
      )

    }
      </div>
    );
}

export default Reply