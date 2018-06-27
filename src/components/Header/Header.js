import React from "react";
import "./Header.css";
import cafelogo from "../../assets/img/cafelogo.png";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__flexParent">
        <div>
          <img className="Header__logo" src={cafelogo} alt="Cafe Berlin Logo" />
        </div>
        <div className="Header__text-block">
          <h1 className="Header__text-block-title">Cafe Berlin</h1>
          <h2 className="Header__text-block-subtitle">Tip-share Calculator</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
