import React from "react";
import product from "../../img/Shop/ProductCard/Product.jpg";

function ShopProductCard() {
  return (
    <section id="shop-product-card">
      <div className="container">
        <div className="row">
          <div className="col-6 shop-product-card-section">
            <img src={product} />
          </div>
          <div className="col-6 shop-product-card-section">
            <article>
              <h3>Winter Walking Shoes</h3>
              <span>$29.00</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nos trud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                in reprehenderit.
              </p>
            </article>
            <form className="d-flex">
              <input type="number" defaultValue="1"/>
              <input type="submit" value="Add to Cart" className="page-btn" />
            </form>
            <div>
              Category : <span>Product Shoes</span>
            </div>
            <ul className="d-flex">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-google"></i>
              </li>
              <li>
                <i className="fab fa-skype"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopProductCard;
