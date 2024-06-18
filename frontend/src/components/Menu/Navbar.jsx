import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
      <img src = {assets.darklogo} alt = "darklogo" className="logo"/>
      <ul className = "navbar-menu">
        <li onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className = {menu==="option"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className = {menu === "mobile app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact-us")} className = {menu === "contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src = {assets.searchicon} alt = ""/>
        <div className="navbar-search-icon">
            <img src = {assets.shop} alt = ""/>
            <div className="dot">

            </div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
