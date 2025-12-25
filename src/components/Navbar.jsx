import React from 'react'
import '../index.css'

function Navbar() {
  return (
    <>
        <nav>
            <div className='logo'><a href="/">Home</a></div>
            <div className='navlink'>
                <a href="#About">About</a>
                <a href="#Work">Working</a>
            </div>

        </nav>
    </>
  )
}

export default Navbar