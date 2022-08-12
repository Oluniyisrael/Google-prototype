import React from 'react'
import './Navbar.css'
import menu from '../Images/352018_apps_icon.png'

function Navbar() {
  return (
    <nav id='nav'>
        <span className='navcontents'><a href='#body'>Gmail</a></span>
        <span className='navcontents'><a href='#body'>Images</a></span>
        <span><img src={menu} alt='...' id='menu'/></span>
        <span className='navcontents' id='siconbor'><h1 id='sicon'>I</h1></span>
    </nav>
  )
}

export default Navbar