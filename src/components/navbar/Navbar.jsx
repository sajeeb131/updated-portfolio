import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='px-20 py-6 navbar-container'>
        <div className='navbar-logo'>
            <a href="">Sajeeb</a>
        </div>
        <div className='flex flex-row gap-6 navbar-links'>
            <a href='#'>Home</a>
            <a href='#'>Projects</a>
            <a href='#'>Skills</a>
        </div>
    </nav>
  )
}

export default Navbar