import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Find your ideal car</h2>
        <p>Our website is dedicated to providing a platform for students to find an affordable and effective vehicle based on multiple factors such as comparative market value and risk tolerance. Check out the deals we have available!</p>
        <button>Car Search</button>
      </div>
    </div>
  )
}

export default Header
