import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


function Header() {
  return (

   <div className="header">
      <div className="headerLeft">
        <Link style={{textDecoration:'none',color:'aliceblue'}} to="/">
        <h2>Shopping-Adda</h2>
        
        </Link>
      </div>
      <div className="headerRight">
        <Link style={{ textDecoration: 'none', color: 'aliceblue', margin: '0 10px' }} to="/home">
          Home
        </Link>
        <Link style={{ textDecoration: 'none', color: 'aliceblue', margin: '0 10px' }} to="/clothings">
          Clothings
        </Link>
        <Link style={{ textDecoration: 'none', color: 'aliceblue', margin: '0 10px' }} to="/gemstones">
          Jewellery
        </Link>
        <Link style={{ textDecoration: 'none', color: 'aliceblue', margin: '0 10px' }} to="/electronics">
          Electronics
        </Link>
      </div>
   </div>

  )
}

export default Header