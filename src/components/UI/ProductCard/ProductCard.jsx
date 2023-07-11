import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img
          src="https://covers.openlibrary.org/b/id/12326074.jpg"
          alt="kitaabKiTasveer"
        />
      </div>

      <div className="book-basic-details">
        <p className="book-title">Book Title</p>
        <p className="book-author">Book author</p>
      </div>

      <p className="book-rating">4.5★</p>
      <p className="book-price">
        ₹100 <s>₹200 </s>
        <span> (50% OFF)</span>
      </p>
      <button className="book-add-to-cart">
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <button className="book-add-to-wishlist">
        Add to Wishlist <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
};

export default ProductCard;
