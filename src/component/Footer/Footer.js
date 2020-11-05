import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top grid4">
        <div className="footer__item">
          <div className="footer__title">
            <img src={logo} alt="logo" />
          </div>
          <p>
            All of our tattoo and piercing masters here are masters indeed...
            Their artistic precision and perception are nothing short of
            perfect!
          </p>
        </div>
        <div className="footer__item">
          <div className="footer__title">
            <h4>Latest Posts</h4>
          </div>
          <div className="footer__article">
            <h4>The "finger tattoo" and their meaning</h4>
            <p>10 Aug 2020</p>
          </div>
          <div className="footer__article">
            <h4>Symbolic tattoos found on ancient Eqyptian mummy</h4>
            <p>10 Aug 2020</p>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__title">
            <h4>Head Office</h4>
          </div>
          <location>
            4096 N Highland St, Arlington VA 32101, USA InkPress@demolink.org
          </location>
          <div className="open-hours">
            <p>
              Mon-Thu:<strong>9:30 - 21:00</strong>
            </p>
            <p>
              Fri:<strong>6:00 - 21:00</strong>
            </p>
            <p>
              Sat:<strong>10:00 - 15:00</strong>
            </p>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__title">
            <h4>Quick Links</h4>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom flex">
        <p>2020 &copy; InkPress. All Rights Reserved</p>
        <div className="footer__socials">
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-instagram" />
          <i className="fa fa-linkedin" />
          <i className="fa fa-pinterest" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
