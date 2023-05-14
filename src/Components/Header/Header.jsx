import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({navbar, name}) => {

  return (
    <div>
      <header className={`${name ? "site-header active" : "site-header"}`}>
        <div className="container">
          <div className="header__inner">
            <nav className="navbar">
              <Link to="#" className="nav-branding">
                Pro<span className="clr__red">live</span>
              </Link>

              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Footer
                  </Link>
                </li>
              </ul>
              <div className="humburger" onClick={navbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
