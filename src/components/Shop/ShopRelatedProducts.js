import React, { useState } from "react";
import { $ } from "react-jquery-plugin";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';
import img1 from "../../img/Shop/Related/1.jpg";
import img2 from "../../img/Shop/Related/2.jpg";
import img3 from "../../img/Shop/Related/3.jpg";
import img4 from "../../img/Shop/Related/4.jpg";

function ShopRelatedProducts() {
  const [Products, setProducts] = useState([
    {
      img: img1,
      name: "Side tie Tanks",
      price: "45$",
    },
    {
      img: img2,
      name: "Side tie Tanks",
      price: "45$",
    },
    {
      img: img3,
      name: "Side tie Tanks",
      price: "45$",
    },
    {
      img: img4,
      name: "Side tie Tanks",
      price: "45$",
    },
    {
      img: img1,
      name: "Side tie Tanks",
      price: "45$",
    },
    {
      img: img2,
      name: "Side tie Tanks",
      price: "45$",
    },
  ]);
  return (
    <section id="shop-related-product">
      <div className="container">
        <h2>Raleted Products</h2>
        <OwlCarousel
          items={4}
          className="owl-theme"
          loop
          nav
          margin={15}
          dots={false}
        >
          {Products.map((product) => {
            return (
              <div className="shop-owl-carousel-item">
                <div className="shop-owl-carousel-imgblock">
                  <img src={product.img} />
                  <div className="shop-owl-carousel-icons d-flex justify-content-center">
                    <i class="far fa-heart"></i>
                    <i class="far fa-plus-square"></i>
                    <i class="fas fa-search"></i>
                  </div>
                </div>
                <div className="shop-owl-carousel-text">
                  <h5>{product.name}</h5>
                  <span>{product.price}</span>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
}

export default ShopRelatedProducts;
