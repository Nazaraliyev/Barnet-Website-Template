import React, { useState } from "react";

function HomeGalery() {
  const [Galery, setGalery] = useState([
    {
      All: [
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
      ],
    },
    {
      Design: [
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
      ],
    },
    {
      Graphic: [
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
      ],
    },
    {
      Photography: [
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
        {
          img: "",
          header: "",
          header: "",
          text: "",
          button: "#",
        },
      ],
    },
  ]);
  const [Choise, setChoise] = useState('All');
  const Clicked = (e) => {
      setChoise(e)
  }
  return (
    <section id="home-galery">
      <div className="container">
        <div id="home-galery-header" className="row align-items-center">
          <div className="col-7">
            <h2>We’ve Done Lot’s of Work, Let’s Check Some From Here</h2>
          </div>
          <div className="col-5 d-flex justify-content-end">
              <button onClick={() => Clicked("all")}>All</button>
              <button onClick={() => Clicked("design")}>Design</button>
              <button onClick={() => Clicked("graphic")}>Graphic</button>
              <button onClick={() => Clicked("photography")}>Photography</button>
          </div>
        </div>
      </div>
      <div id = 'home-galery-wrapper' className="row">
          {
                
          }
      </div>
    </section>
  );
}

export default HomeGalery;
