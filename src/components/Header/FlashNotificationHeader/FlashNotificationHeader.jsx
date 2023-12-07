import React from 'react'
import "./FlashNotificationHeader.css"

const FlashNotificationHeader = () => {
  return (
    <header className={`flash-header bg-flash-header`}>
        <p className={`my-1 fw-medium`}>Flat 10% off on your first order</p>
    </header>
  )
}

export default FlashNotificationHeader