import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-use";
import inkPress from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  const { pathname } = useLocation();

  const toggleActive = (e) => {
    console.log(e.target.href);
    console.log(pathname);
  };

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <div className="navbar__top__contacts">
          <div>
            <i className="fa fa-envelope" />
            <p>brianmauriceoluoch@gmail.com</p>
          </div>
          <div>
            <i className="fa fa-mobile" />
            <p>254 795 772 333</p>
          </div>
        </div>
        <div className="navbar__top__socials">
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-instagram" />
          <i className="fa fa-linkedin" />
          <i className="fa fa-pinterest" />
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__logo">
          <img src={inkPress} alt="inkPress" />
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <NavLink onClick={toggleActive} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleActive} to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleActive} to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
