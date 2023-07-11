import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItemsCard.css";

const CartItemsCard = () => {
  return (
    <div className="card-items-card">
      <div className="cart-items-card-book-cover">
        <img
          className="cart-items-card-book-cover-image"
          src="https://covers.openlibrary.org/b/id/12326074.jpg"
          alt="kitaabKiTasveer"
        />
      </div>
      <div className="cart-items-card-book-basic-details">
        <p className="cart-items-card-book-title">Book Title</p>
        <p className="cart-items-card-book-author">Book author</p>
      </div>
      <p className="cart-items-card-book-price">
        ₹100 <s>₹200 </s>
        <span> (50% OFF)</span>
      </p>
      <div className="cart-items-card-quantity-builder">
        <button>-</button> 1 <button>+</button>
      </div>
      <button className="cart-items-card-add-to-cart">
        Move to Wishlist <FontAwesomeIcon icon={faHeart} />
      </button>
      <button className="cart-items-card-remove-from-cart">
        Remove from cart <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItemsCard;
