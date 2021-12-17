import React from "react";
import logo from '../img/Logo/logo.png';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <div id="header-contact">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ul id="header-sosial-media" className="d-flex">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <ul
                id="header-main-contact"
                className="d-flex justify-content-end"
              >
                <li>
                  <a href="#">
                    <i className="fas fa-phone"></i> (251) 235-3256
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-envelope"></i> info@barnet.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav id = 'header-nav'>
          <div className="container d-flex align-items-center justify-content-between">
              <div id="logo">
                  <img src = {logo}></img>
              </div>
              <ul id = 'header-manu' className="d-flex">
                  <li>
                      <Link to = '/'>Home</Link>
                  </li>
                  <li>
                      <Link to = '/about'>About</Link>
                  </li>
                  <li>
                      <Link to = '/services'>Services</Link>
                  </li>
                  <li>
                      <Link to = '/cases'>Cases</Link>
                  </li>
                  <li>
                      <Link to = '/shop'>Shop</Link>
                  </li>
                  <li>
                      <Link to = '/blog'>Blog</Link>
                  </li>
                  <li>
                      <Link to = 'contact'>Contact</Link>
                  </li>
              </ul>
              <div id = 'header-getStarted' className="d-flex">
                  <button><i className="fas fa-search"></i></button>
                  <button className="page-btn">Get Started Now</button>
              </div>
          </div>
      </nav>
    </header>
  );
}

export default Header;
