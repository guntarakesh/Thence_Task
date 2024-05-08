import React from 'react'
import logo from './image.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
        <div className='navbar'>
       <div >
       <img className='logo' src={logo} />
       </div>
       <div>
       <Link style={{textDecoration:'none',color:'black'}} to='form'>
        <button className='btn projects'>Get Projects</button>
        </Link>
       <button className='btn talent'>Onboard Talent</button>
       </div>
    </div>

  )
}

export default Navbar