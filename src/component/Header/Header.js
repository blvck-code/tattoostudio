import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-use";
import inkPress from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  const { pathname } = useLocation();
  const [navbar, setNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  const links = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "services",
      url: "/services",
    },
    {
      name: "artists",
      url: "/artists",
    },
    {
      name: "news",
      url: "/news",
    },
    {
      name: "gallery",
      url: "/gallery",
    },
    {
      name: "contacts",
      url: "/contacts",
    },
  ];

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

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
      <div className={navbar ? "navbar__bottom active" : "navbar__bottom"}>
        <div className="navbar__logo">
          <img src={inkPress} alt="inkPress" />
        </div>
        <div className="navbar__menu">
          <div
            className={activeNav ? "mobile-menu close" : "mobile-menu"}
            onClick={() => setActiveNav(!activeNav)}>
            {activeNav ? (
              <i className="fa fa-close" />
            ) : (
              <i className="fa fa-bars" />
            )}
          </div>
          <ul className="menu-nav">
            {links?.map(({ name, url }, idx) => (
              <li key={idx}>
                <Link className={pathname === url ? "active" : ""} to={url}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
