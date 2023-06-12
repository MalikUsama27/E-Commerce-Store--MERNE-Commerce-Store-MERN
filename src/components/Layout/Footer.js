import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <h4 className='text-center'>All Right Reserved &copy; Usama Malik</h4>
      <p className="text-center mt-3">
        <Link to='/about'>About</Link>
        |
        <Link to='/contact'>Contact Us</Link>
        
        
        
      </p>
    </div>
  )
}

export default Footer
