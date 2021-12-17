import React, { useState, useEffect } from "react";
import userimg from '../../img/Shop/author-1.png'

function ShopProductData() {
  const [Choise, setChoise] = useState("reviews");
  const [UserComment, setUserComment] = useState([
    {
      img: userimg,
      name: "Stevan Rich",
      date: "January 17, 2019:",
      text: "Value for money , I use it from long time and it is very useful and good product.",
    },
    {
      img: userimg,
      name: "Stevan Rich",
      date: "January 17, 2019:",
      text: "Value for money , I use it from long time and it is very useful and good product.",
    },
  ]);

  const ChangeCoiseDescript = () => {

    setChoise("descript");
  };
  const ChangeCoiseReviews = () => {
    setChoise("reviews");
  };
  return (
    <section id="shop-product-data">
      <div className="container">
        <div id="shop-product-data-btn-group">
          <button  className="page-btn" onClick={() => ChangeCoiseDescript()}>
            Description
          </button>
          <button className="page-btn" onClick={() => ChangeCoiseReviews()}>
            Reviews
          </button>
        </div>
        {Choise == "descript" ? (
          <article id="shop-descript">
            <h3>Product Description</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.Bring to the table win-win
              survival strategies to ensure proactive domination. runway heading
              towards a streamlined cloud solution.
            </p>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence.
            </p>
          </article>
        ) : (
          <div id="shop-review">
            <div id="shop-review-comment" className="row">
              {UserComment.map((user) => {
                return (
                  <div className="col-6 d-flex align-items-start">
                    <img src={user.img} />
                    <div className="shop-review-comment-content">
                      <div>
                        {user.name} - <span>{user.date}</span>
                      </div>
                      <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <p>{user.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3>Add Your Review</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form>
              <div className="row">
                <div className="col-6">
                  <label for="form-name">First Name*</label>
                  <input type="text" id="form-name" />
                </div>
                <div className="col-6">
                  <label for="email"> Email*</label>
                  <input type="text" id="email" />
                </div>
                <div id="form-rating" className="col-12">
                  Your Rating:{" "}
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div className="col-12">
                  <label for="form-textarea">Your Comments*</label>
                  <textarea id="form-textarea" />
                </div>
              </div>
              <input type="submit" className="page-btn" />
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShopProductData;
