import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/RootLayout/Navbar/Navbar";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import axios from "axios";

import CartOrderDetails from "../../components/UI/CartOrderDetails/CartOrderDetails";
import "./Cart.css";
import "./CartItemsCard.css";
const Cart = () => {
  const { cartProducts, setCartProducts, removeCartHandler } =
    useContext(CartContext);
  const { isWishlistProductPresent, addWishlistItems } =
    useContext(WishlistContext);

  // const fetchCartDetails = () => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("/api/user/cart", {
  //       headers: {
  //         authorization: `bearer ${token}`,
  //       },
  //     })
  //     .then((resp) => setCartProducts(resp.data.cart))
  //     .catch((e) => console.error(e));
  // };

  // useEffect(() => {
  //   fetchCartDetails();
  // }, []);

  const changeQuantityHandler = (productId, actionType) => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: actionType,
          },
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp.data.cart);
        setCartProducts(resp.data.cart);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <Navbar />
      <h1>My Cart</h1>
      <div className="cart-items-and-cart-order-details">
        <div className="cart-items">
          {cartProducts.length > 0 &&
            cartProducts.map((product) => {
              return (
                <div className="card-items-card" key={product._id}>
                  <div className="cart-items-card-book-cover">
                    <img
                      className="cart-items-card-book-cover-image"
                      src={product.img}
                      alt="kitaabKiTasveer"
                    />
                  </div>
                  <div className="cart-items-card-book-basic-details">
                    <p className="cart-items-card-book-title">{product.name}</p>
                    <p className="cart-items-card-book-author">
                      {product.author}
                    </p>
                  </div>
                  <p className="cart-items-card-book-price">
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
                  <div className="cart-items-card-quantity-builder">
                    <button
                      onClick={() =>
                        changeQuantityHandler(product._id, "decrement")
                      }
                    >
                      -
                    </button>{" "}
                    {product.qty > 0 ? product.qty : 1}{" "}
                    <button
                      onClick={() =>
                        changeQuantityHandler(product._id, "increment")
                      }
                    >
                      +
                    </button>
                  </div>
                  {/* {isWishlistProductPresent(productId)?():()} */}
                  <button
                    className="cart-items-card-add-to-cart"
                    onClick={() => {
                      addWishlistItems(product);
                      removeCartHandler(product._id);
                    }}
                  >
                    Move to Wishlist <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className="cart-items-card-remove-from-cart"
                    onClick={() => removeCartHandler(product._id)}
                  >
                    Remove from cart <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            })}
        </div>
        {cartProducts.length > 0 && (
          <div className="cart-order-details">
            <CartOrderDetails />
          </div>
        )}
      </div>
      {cartProducts.length === 0 && (
        <h1 style={{ color: "grey" }}>Your cart is empty😑</h1>
      )}
    </div>
  );
};

export default Cart;
