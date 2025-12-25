import React from 'react'
import '../index.css'

function Navbar() {
  return (
    <>
        <nav>
            <div className='logo'><a href="/">Home</a></div>
            <div className='navlink'>
                <a href="#service">Work</a>
                <a href="#about">About</a>
            </div>

        </nav>
    </>
  )
}

export default Navbar