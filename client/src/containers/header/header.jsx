import React from 'react'
import './header.css'
import PostBar from './postBar'

const Header = () => {
  return (
    <div className='ai__header section__padding'>
      <div className='ai__header-content'>
        <p> Answer today's AI generated question:</p>
        <h1 className='gradient__text'> Why you stanky fr</h1>
        <PostBar/>
        <div className='ai__header-content__answers'>
        <p>15 responses in the last hour</p>
        </div>
      </div>
    </div>
  )
}

export default Header