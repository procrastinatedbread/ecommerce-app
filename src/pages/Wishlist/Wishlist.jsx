import React, { useContext } from "react";
import Navbar from "../../components/RootLayout/Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./WishlistCard.css";
import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

const Wishlist = () => {
  const { state, removeWishlistHandler } = useContext(WishlistContext);
  const { isCartProductPresent, addCartItems } = useContext(CartContext);

  console.log(state);
  return (
    <div className="wishlist-page">
      <Navbar />
      <h1>My Wishlist({state.wishListProducts.length})</h1>

      <div className="wishlist-section">
        {state.wishListProducts.length > 0 &&
          state.wishListProducts.map((product) => {
            return (
              <div className="wishlist-card" key={product._id}>
                <div className="wishlist-card-book-cover">
                  <img
                    className="wishlist-card-book-cover-image"
                    src={product.img}
                    alt="kitaabKiTasveer"
                  />
                </div>

                <div className="wishlist-card-book-basic-details">
                  <p className="wishlist-card-book-title">{product.name}</p>
                  <p className="wishlist-card-book-author">{product.author}</p>
                </div>
                <button
                  className="wishlist-card-remove-from-cart"
                  onClick={() => {
                    removeWishlistHandler(product._id);
                    // removeCartHandler(product._id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <p className="wishlist-card-book-price">
                  ₹{product.price} <s>₹{product.originalPrice} </s>
                  <span>
                    {" "}
                    (
                    {(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                      100
                    ).toPrecision(2)}
                    % OFF)
                  </span>
                </p>
                {isCartProductPresent(product._id) ? (
                  <Link to="/cart">
                    <button className="wishlist-card-add-to-cart">
                      Go to Cart <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </Link>
                ) : (
                  <button
                    className="wishlist-card-add-to-cart"
                    onClick={() => {
                      addCartItems(product);
                      removeWishlistHandler(product._id);
                    }}
                  >
                    Move to Cart <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                )}
              </div>
            );
          })}
        {state.wishListProducts.length === 0 && (
          <h1>Your wishlist is empty😑</h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
