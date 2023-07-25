import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartOrderDetails.css";

const CartOrderDetails = () => {
  const navigate = useNavigate();
  const { setDiscount, qty, totalPrice, discount, grandTotal } =
    useContext(CartContext);

  const checkoutHandler = () => {
    navigate("/address");
  };

  const handleCouponButton = () => {
    setDiscount(55);
  };
  return (
    <div className="cart-order-details">
      <div className="cart-order-coupon-apply">
        <p>Have a Coupon?</p>
        <button onClick={handleCouponButton}>Apply Coupon</button>
      </div>
      <hr />
      <h3 className="cart-order-details-title">PRICE DETAILS</h3>
      <hr />
      <div className="cart-order-details-main">
        <div className="cart-order-details-main-price">
          <p>Price({qty} items)</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="cart-order-details-main-price">
          <p>Discount</p>
          <p>-₹{discount}</p>
        </div>
        <div className="cart-order-details-main-price">
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        {/* <div className="cart-order-details-main-price">
          <p>Coupon Discount</p>
          <p>₹{(discount)}</p>
        </div> */}
      </div>
      <hr />
      <div className="cart-order-details-main-total-price">
        <p>Total Amount</p>
        <p>₹{grandTotal}</p>
      </div>
      <hr />
      <p className="cart-order-details-savings-statement">
        You will save ₹{discount} on this order.{" "}
      </p>
      <button className="checkout-button" onClick={checkoutHandler}>
        Checkout
      </button>
    </div>
  );
};

export default CartOrderDetails;
