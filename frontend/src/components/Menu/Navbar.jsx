import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu, setMenu] = useState("menu");
  return (
      <div className='navbar'>
        <img src = {assets.newlogo} alt = "darklogo" className="logo"/>
        <ul className = "navbar-menu">
          <li onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}>home</li>
          <li onClick={()=>setMenu("deals of the day")} className = {menu==="deals of the day"?"active":""}>deals of the day</li>
          <li onClick={()=>setMenu("swap hub")} className = {menu === "swap hub"?"active":""}>swap hub</li>
          <li onClick={()=>setMenu("dev team")} className = {menu === "dev team"?"active":""}>dev team</li>
        </ul>
        <div className="navbar-right">
          <div className = "navbar-search-icon">
            <img src = {assets.searchicon} alt = ""/>
          </div>
          <div className="navbar-shop-icon">
            <img src = {assets.shop} alt = ""/>
          </div>
          <button>Sign In</button>
        </div>
      </div>
  )
}

export default Navbar
