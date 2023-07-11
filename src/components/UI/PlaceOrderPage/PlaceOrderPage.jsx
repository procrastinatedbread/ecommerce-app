import React from "react";
import "./PlaceOrderPage.css";

const PlaceOrderPage = () => {
  return (
    <div>
      <div className="place-order-details">
        <h2>ORDER DETAILS</h2>
        <hr />

        <div className="place-order-headers">
          <p>Items</p>
          <p>Quantity</p>
        </div>

        <div className="place-order-items">
          <p>The Monk who sold his ferrari</p>
          <p>1</p>
        </div>
        <hr />
        <h3 className="place-order-details-title">PRICE DETAILS</h3>
        <hr />
        <div className="checkout-order-details-main">
          <div className="place-order-details-main-price">
            <p>Price(1 items)</p>
            <p>₹399</p>
          </div>
          <div className="place-order-details-main-price">
            <p>Discount</p>
            <p>-₹180</p>
          </div>
          <div className="place-order-details-main-price">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="place-order-details-main-price">
            <p>Coupon Discount</p>
            <p>₹0.00</p>
          </div>
        </div>
        <hr />
        <div className="place-order-details-main-total-price">
          <p>Total Amount</p>
          <p>₹219.00</p>
        </div>
        <hr />
        <h3 className="place-order-details-title">DELIVER TO</h3>
        <hr />
        <div className="place-order-page-address">
          <h3>Nikhil Chhabra</h3>
          <p>D-2/175 Jeewan Park, Uttam Nagar, New Delhi-110059</p>
          <p>Phone number: 1234567890</p>
        </div>
        <hr />
        <div className="place-order-page-button">
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
