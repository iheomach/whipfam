import React from 'react'
import './Menu.css'
import { assets } from '../../assets/assets'
const Menu = () => {
  return (
    <div className='menu'>
      <img src = {assets.darklogo} alt = "darklogo" className="logo"/>
      <ul className = "menubar">
        <li>home</li>
        <li>menu</li>
        <li>mobile app</li>
        <li>contact us</li>
      </ul>
      <div className="menu-right">
        <img src = {assets.searchicon} alt = ""/>
        <div className="menubarsearchicon">
            <img src = {assets.shop} alt = ""/>
            <div className="dot">

            </div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Menu
