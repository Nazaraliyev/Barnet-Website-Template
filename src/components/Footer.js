import React from "react";
import logo from "../img/Logo/logo.png";

function Footer() {
  return (
    <footer>
      <div id="footer-wrapper">
        <div className="container">
          <div id="footer-subscribe">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <p>Subscribe to Our Newsletter</p>
              </div>
              <div className="col-6">
                <form className="d-flex justify-content-between">
                  <input type="text" placeholder="Your email"></input>
                  <input type="submit" value="Subscribe now"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="footer-content-item">
                  <h3>
                    <img src={logo}></img>
                  </h3>
                  <p>
                    Lorem ipsum dolor amet consecte adipisicing elit sed eiusm
                    tempor incididunt ut labore dolore magna aliqua enim ad
                    minim veniam. quis nostrud exercitation ullam
                  </p>
                  <p>
                    Duis aute irure dolor in reprehend it in voluptate velit
                    cillum.dolore eu fugiat nulla.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="footer-content-item">
                  <h3>Twitter Feeds</h3>
                  <ul>
                    <li className="d-flex">
                      <i className="fab fa-twitter twitter"></i>
                      <div>
                        <h5>Kirstin Hagel</h5>
                        <span>@KirstinHagel . 7 Dec</span>
                        <p>
                          Excepteur sint occaecat cupidatat proent.
                          <a href="#">https://T.Co/Sr45bvMJU6</a>
                        </p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <i className="fab fa-twitter twitter"></i>
                      <div>
                        <h5>Kirstin Hagel</h5>
                        <span>@KirstinHagel . 7 Dec</span>
                        <p>
                          Excepteur sint occaecat cupidatat proent.
                          <a href="#">https://T.Co/Sr45bvMJU6</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className="footer-content-item">
                  <h3>Latest Articles</h3>
                  <ul>
                    <li>
                      <span>26 Dec, 2018</span>
                      <h5>Aspernatur aut odit fugit quia</h5>
                    </li>
                    <li>
                      <span>26 Dec, 2018</span>
                      <h5>Aspernatur aut odit fugit quia</h5>
                    </li>
                    <li>
                      <span>26 Dec, 2018</span>
                      <h5>Aspernatur aut odit fugit quia</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className="footer-content-item">
                  <h3>Contact Info</h3>
                  <ul>
                    <li>
                      Flat 20, Reynolds Neck, North Hele naville, FV77 8WS
                    </li>
                    <li>+2(305) 587-3407</li>
                    <li>info@barnet.com</li>
                    <li>
                      <ul id = 'footer-sosial-media' className="d-flex">
                        <li>
                          <i className="fab fa-google"></i>
                        </li>
                        <li>
                          <i className="fab fa-facebook-f"></i>
                        </li>
                        <li>
                          <i className="fab fa-dribbble"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-page-end">
        <div className="container d-flex justify-content-between">
          <p>Barnet © 2019 All Right Reserved</p>
          <div>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
