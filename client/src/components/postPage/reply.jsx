import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Reply = (props) => {

  
  return (
  <div>
      {!props.post.replies ? (
        <p>Reply to this post!</p>
        ) : props.post.replies?.length > 0 ?(
          
        <p>Anonymous: {props.post.replies[0]}</p>
      
      ) : (
        <p>Reply to this post!</p>
      )

    }
      </div>
    );
}

export default Reply