import React from "react";
import "../sass/components/Header.scss";
import logo from "../assets/sportsee-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="SportSee" className="header-logo" />
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">Accueil</li>
          <li className="nav-item">Profil</li>
          <li className="nav-item">Réglage</li>
          <li className="nav-item">Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
