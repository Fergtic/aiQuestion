import React from 'react'
import { Link } from 'react-router-dom'

const Content = (props) => {

  let content = props.post.post.postContent
  let remove = 0
  if (props.post.post.postContent.length > 40){
    remove = -1 *(props.post.post.postContent.length - 40)
    content = content.slice(0, remove)
    content = content + '...'
    console.log('in the content')
    console.log(content)

  }

  return (
    <button>
      <Link to={`/m/${props.post.post._id}`} style={{ textDecoration: 'none' }}>
      <h3> {content}</h3>
      </Link>
    </button>
     
  )
}

export default Content

