import React from 'react'
import { Link } from 'react-router-dom'

const Content = (props) => {
  return (
      <h3> {props.post.postContent} </h3>
     
  )
}

export default Content