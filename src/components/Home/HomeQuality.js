import React, { useState } from "react";
import img from "../../img/Home/Quality/image-1.jpg";

function HomeQuality() {
  const [QualityItems, setQualityItems] = useState([
    {
      iconClass: "fas fa-layer-group",
      name: "Marketing Strategy",
      text: "Excepteur sint occaecat cupidatat non proident.sunt culpa qui officia.",
    },
    {
      iconClass: "fas fa-layer-group",
      name: "Marketing Strategy",
      text: "Excepteur sint occaecat cupidatat non proident.sunt culpa qui officia.",
    },
    {
      iconClass: "fas fa-layer-group",
      name: "Marketing Strategy",
      text: "Excepteur sint occaecat cupidatat non proident.sunt culpa qui officia.",
    },
    {
      iconClass: "fas fa-layer-group",
      name: "Marketing Strategy",
      text: "Excepteur sint occaecat cupidatat non proident.sunt culpa qui officia.",
    },
  ]);
  return (
    <section id="home-quality">
      <div className="row align-items-strech">
        <div className="col-6 home-quality-section">
          <img src={img}></img>
        </div>
        <div className="col-6 home-quality-section">
          <h2>
            Why People <br /> Choose Burnet
          </h2>
          <p>
            Excepteur sint occaecat cupidatat proident sunt culpa officia
            desernt mollit <br /> anim est laborum sed perspiciatis.
          </p>
          <div className="row">
            {QualityItems.map((item) => {
              return <div className="col-6 home-quality-item d-flex">
                  <i className={item.iconClass}></i>
                  <div>
                      <h5>{item.name}</h5>
                      <p>{item.text}</p>
                  </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeQuality;
