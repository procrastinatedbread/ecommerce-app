import React from "react";
import Footer from "../../components/RootLayout/Footer/Footer";

import Navbar from "../../components/RootLayout/Navbar/Navbar";
import CartItemsCard from "../../components/UI/CartItemsCards/CartItemsCard";
import CartOrderDetails from "../../components/UI/CartOrderDetails/CartOrderDetails";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <h1>My Cart</h1>
      <div className="cart-items-and-cart-order-details">
        <div className="cart-items">
          <CartItemsCard />
          {/* <CartItemsCard /> */}
          <CartItemsCard />
        </div>
        <div className="cart-order-details">
          <CartOrderDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
