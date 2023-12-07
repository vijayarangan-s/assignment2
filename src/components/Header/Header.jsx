import React from 'react'
import FlashNotificationHeader from './FlashNotificationHeader/FlashNotificationHeader'
import Navbar from './Navbar/Navbar'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <FlashNotificationHeader/>
        <Navbar/>
    </div>
  )
}

export default Header