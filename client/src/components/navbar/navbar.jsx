import React from 'react'
import { useState, useEffect } from 'react'
import './navbar.css'

const Navbar = () => {

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 250){
      setShow(true)
    } else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',
    controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])


  return (
    <div className='container'>
    <div className={`ai__navbar ${show && 'active'}`}>
      <div className='ai__navbar-links'>
        <div className={`ai__navbar-links_title ${show && 'active'}`}>
          <h1 className='gradient__text' >aiQuestion</h1>
        </div>
      </div>
    </div>
    </div>
      
  )
}

export default Navbar