import React from 'react'
import { Link } from 'react-router-dom'

const Content = (props) => {
  return (
    <button>
      <Link to={`/m/${props.post.post._id}`} style={{ textDecoration: 'none' }}>
      <h3> {props.post.post.postContent} </h3>
      </Link>
    </button>
     
  )
}

export default Content