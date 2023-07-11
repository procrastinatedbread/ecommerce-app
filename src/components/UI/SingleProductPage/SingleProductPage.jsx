import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBoltLightning,
  faTag,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  return (
    <div className="single-product-card">
      <div className="single-product-card-book-cover">
        <img
          className="single-product-card-book-cover-image"
          src="https://covers.openlibrary.org/b/id/12326074.jpg"
          alt="kitaabKiTasveer"
        />
      </div>
      <div className="single-product-card-book-details">
        <div className="single-product-card-book-basic-details">
          <h3 className="single-product-card-book-title">Book Title</h3>
          <p className="single-product-card-book-author">
            4 <FontAwesomeIcon icon={faStar} />
          </p>
          {/* <p className="single-product-card-book-author">Book author</p> */}
        </div>
        <div className="single-product-card-price">
          <p className="single-product-card-book-price">
            ₹100 <s>₹200 </s>
            <span> (50% OFF)</span>
          </p>
        </div>
        <p className="hurry-statement">
          <FontAwesomeIcon icon={faBoltLightning} /> Hurry, a few left!
        </p>
        <hr />
        <div className="single-product-card-product-features">
          <p>
            <FontAwesomeIcon icon={faTag} /> Fastest Delivery
          </p>
          <p>
            <FontAwesomeIcon icon={faTag} /> Inclusive of All Taxes
          </p>
          <p>
            <FontAwesomeIcon icon={faTag} /> Cash On Delivery Available
          </p>
        </div>
        <hr />
        <div className="single-product-details">
          <p>
            <i>Author</i>: Author
          </p>
          <p>
            <i>Category</i>: Category
          </p>
          <p>
            <i>Binding</i>: Binding
          </p>
          <p>
            <i>Language</i>: English
          </p>
        </div>

        <button className="single-product-add-to-cart">
          Add to Cart <FontAwesomeIcon icon={faCartShopping} />
        </button>

        <button className="single-product-add-to-wishlist">
          Add to Wishlist <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default SingleProductPage;
