import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./WishlistCard.css";

const WishlistCard = () => {
  return (
    <div className="wishlist-card">
      <div className="wishlist-card-book-cover">
        <img
          className="wishlist-card-book-cover-image"
          src="https://covers.openlibrary.org/b/id/12326074.jpg"
          alt="kitaabKiTasveer"
        />
      </div>

      <div className="wishlist-card-book-basic-details">
        <p className="wishlist-card-book-title">Book Title</p>
        <p className="wishlist-card-book-author">Book author</p>
      </div>
      <button className="wishlist-card-remove-from-cart">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <p className="wishlist-card-book-price">
        ₹100 <s>₹200 </s>
        <span> (50% OFF)</span>
      </p>
      <button className="wishlist-card-add-to-cart">
        Move to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default WishlistCard;
