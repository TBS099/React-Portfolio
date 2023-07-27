import React, { useState } from "react";
import "./NavBar.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logo } from "../../content_option";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";

function NavBar() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="portfolio-header sticky-header">
        <div className="portfolio-menu">
          <a className="portfolio-brand" href="#home">
            <img src={logo} className="portfolio-logo" />
          </a>
          <div className="portfolio-menu-section">
            <ThemeToggle />
            <button className="menu-toggle" onClick={handleToggle}>
              {!isActive ? <VscGrabber /> : <VscClose />}
            </button>
          </div>
        </div>
        <div className={`portfolio-menu-list ${isActive ? "expand" : ""}`}>
          <ul className="portfolio-menu-links">
            <li className="menu-item">
              <a className="menu-link" href="#about">
                About Me
              </a>
            </li>
            <li className="menu-item">
              <a href="#portfolio" className="menu-link">
                My Projects
              </a>
            </li>
            <li className="menu-item">
              <a href="#contact" className="menu-link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;
