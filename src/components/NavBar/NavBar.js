import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              A Propos
            </Link>
          </li>
          <li className="nav-item">
            <button className="gitHub__button">
              <a
                href="https://github.com/yxwangOCR/YixuanWANG_P11_16062022_Kasa"
                rel="noopener"
                target="blank"
                className="gitHub__link"
              >
                Code sur GitHub
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
