import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='ai__navbar'>
      <div className='ai__navbar-links'>
        <div className='ai__navbar-links_title'>
          <h1 className='gradient__text' >aiQuestion</h1>
        </div>
      </div>
      <div className='ai__navbar-sign'>
          <p>Sign In</p>
          <button type="button">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar