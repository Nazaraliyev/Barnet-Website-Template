import React from "react";
import about from '../../img/Home/News/about.jpg'

function HomeAbout() {
  return (
    <section id="home-about">
      <div className="container">
        <div className="row">
          <div className="col-6  home-about-section">
            <img src = {about}></img>
            <div className="d-flex align-items-center">
              <div><i className="fas fa-play"></i></div>
              <h4>Want to Watch <br/> How Work Our Company</h4>
            </div>
          </div>
          <div className="col-6 home-about-section">
            <h2>Barnet Allows You Manage & Grow Your Business</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod
              tempor incididunt.enim ad minim veniam, quis nostrud exer citation
              ulla mco laboris nisi ut aliquip commodo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accu santium doloreque laudantum
            </p>

            <button className="page-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
