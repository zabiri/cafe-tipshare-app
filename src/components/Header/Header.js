import React from 'react'
import './Header.css'
import cafelogo from '../../assets/img/cafelogo.png' 

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__text-block">
          <img className="Header__logo" src={cafelogo} alt="Cafe Berlin Logo"/>
          <h1 className="Header__title">Cafe Berlin</h1>
          <h2 className="Header__subtitle">Tip-share Calculator</h2>
      </div>
    </header>
  )
}

export default Header
