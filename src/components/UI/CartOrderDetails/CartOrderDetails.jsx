import React from "react";
import "./CartOrderDetails.css";

const CartOrderDetails = () => {
  return (
    <div className="cart-order-details">
      <div className="cart-order-coupon-apply">
        <p>Have a Coupon?</p>
        <button>Apply Coupon</button>
      </div>
      <hr />
      <h3 className="cart-order-details-title">PRICE DETAILS</h3>
      <hr />
      <div className="cart-order-details-main">
        <div className="cart-order-details-main-price">
          <p>Price(1 items)</p>
          <p>₹399</p>
        </div>
        <div className="cart-order-details-main-price">
          <p>Discount</p>
          <p>-₹180</p>
        </div>
        <div className="cart-order-details-main-price">
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        <div className="cart-order-details-main-price">
          <p>Coupon Discount</p>
          <p>₹0.00</p>
        </div>
      </div>
      <hr />
      <div className="cart-order-details-main-total-price">
        <p>Total Amount</p>
        <p>₹219.00</p>
      </div>
      <hr />
      <p className="cart-order-details-savings-statement">
        You will save ₹180 on this order.{" "}
      </p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartOrderDetails;
