import { useContext, useState } from "react";
import "./Address.css";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../../context/AddressContext";
import UserAddress from "../AddressForm/AddressForm";
import { CartContext } from "../../../context/CartContext";

export default function Address() {
  const navigate = useNavigate();
  const { state, dispatch, selectedAddress, setSelectedAddress } =
    useContext(AddressContext);
  const { qty, discount, totalPrice, grandTotal } = useContext(CartContext);
  const [showAddress, setShowAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState();

  const clickEditHandler = (addressId) => {
    setEditingAddressId(addressId);
    setShowAddress(true);
    console.log(addressId);
  };

  const clickAddHandler = () => {
    setEditingAddressId(null);
    setShowAddress(true);
  };
  const removeAddressHandler = (id) => {
    dispatch({ type: "REMOVE_ADDRESS", payload: id });
  };

  return (
    <div className="address-main">
      <h1>Checkout</h1>
      <div className="address-details">
        <div>
          {state.addresses.map((add) => (
            <div className="address-card" key={add.id}>
              <div className="radio-btn">
                <input
                  type="radio"
                  checked={selectedAddress.id === add.id}
                  onChange={() => {
                    setSelectedAddress(
                      state.addresses.find(({ id }) => id === add.id)
                    );
                  }}
                />
                <h2> {add.fullName}</h2>
              </div>

              <p>
                {add.home_address},{add.state},{add.country},{add.pincode}
              </p>

              <div className="address-card-btn-container">
                <button
                  className="edit-btn"
                  onClick={() => clickEditHandler(add.id)}
                >
                  Edit
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeAddressHandler(add.id)}
                >
                  Remove address
                </button>
              </div>
            </div>
          ))}

          <button className="add-btn" required={true} onClick={clickAddHandler}>
            <i className="fa fa-plus"></i> Add New addresss
          </button>
        </div>

        <div className="address-container">
          <h1>Order summary</h1>
          <div className="price-breakup">
            <p>Total items</p> <p>{qty}</p>
          </div>
          <div className="price-breakup">
            <p>Total MRP</p> <p>₹{totalPrice}</p>
          </div>

          <div className="price-breakup">
            <p>Discount</p> <p>-₹{discount}</p>{" "}
          </div>
          <div className="price-breakup">
            {" "}
            <p>Delivery charges</p> <p>₹FREE</p>{" "}
          </div>

          <div className="price-breakup">
            {" "}
            <p>Total Price</p> <p>₹{grandTotal}</p>{" "}
          </div>
          <br></br>
          <hr></hr>
          <h2>Deliver to</h2>
          <div className="price-breakup">{selectedAddress.fullName}</div>
          <div className="price-breakup">{selectedAddress.home_address}</div>
          <div className="price-breakup">
            {selectedAddress.state},{selectedAddress.country}
          </div>
          <div className="price-breakup">{selectedAddress.pincode}</div>

          <button className="checkout-btn" onClick={() => navigate("/order")}>
            Place order
          </button>
        </div>
        {showAddress && (
          <UserAddress
            onSave={() => setShowAddress(false)}
            editingAddressId={editingAddressId}
          />
        )}
      </div>
    </div>
  );
}
