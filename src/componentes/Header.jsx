import React, { useState } from "react";
import "../App.css";
import logo from "../img/logo.svg";
import bxmenu from "../img/bxmenu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <p>Texto de header top</p>
      <header className={`App-header ${isOpen ? "menu-open" : ""}`}>
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`boxNavSetions ${isOpen ? "open" : ""}`}>
          <a href="#" className="sections">
            Inicio
          </a>
          <a href="#" className="sections">
            Sección 2
          </a>
          <a href="#" className="sections">
            Sección 3
          </a>
        </nav>
        <div className="nav-toggle" onClick={toggleMenu}>
          <img src={bxmenu} alt="menú" />
        </div>
      </header>
    </div>
  );
};

export default Header;
