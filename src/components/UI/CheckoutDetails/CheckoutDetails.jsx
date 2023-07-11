import React from "react";
import "./CheckoutDetails.css";

const CheckoutDetails = () => {
  return (
    <div>
      <div className="checkout-order-details">
        <h2>ORDER DETAILS</h2>
        <hr />

        <div className="checkout-order-headers">
          <p>Items</p>
          <p>Quantity</p>
        </div>

        <div className="checkout-order-items">
          <p>The Monk who sold his ferrari</p>
          <p>1</p>
        </div>
        <hr />
        <h3 className="checkout-order-details-title">PRICE DETAILS</h3>
        <hr />
        <div className="checkout-order-details-main">
          <div className="checkout-order-details-main-price">
            <p>Price(1 items)</p>
            <p>₹399</p>
          </div>
          <div className="checkout-order-details-main-price">
            <p>Discount</p>
            <p>-₹180</p>
          </div>
          <div className="checkout-order-details-main-price">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="checkout-order-details-main-price">
            <p>Coupon Discount</p>
            <p>₹0.00</p>
          </div>
        </div>
        <hr />
        <div className="checkout-order-details-main-total-price">
          <p>Total Amount</p>
          <p>₹219.00</p>
        </div>
        <hr />
        <div className="checkout-page-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
