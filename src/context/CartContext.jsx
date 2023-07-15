import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const { navigate } = useNavigate();

  const addCartItems = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ product }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setCartProducts(data.cart);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeCartHandler = (productId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      })
      .then((resp) => {
        setCartProducts(resp.data.cart);
      })
      .catch((e) => console.error(e));
  };
  const isCartProductPresent = (id) => {
    return cartProducts.some((cartProduct) => cartProduct?._id === id);
  };
  const [discount, setDiscount] = useState(0);

  const totalPrice = cartProducts.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  console.log(totalPrice);

  const qty = cartProducts.reduce((acc, curr) => acc + curr.qty, 0);
  const grandTotal = totalPrice - discount;
  console.log(grandTotal);
  const handleAddCartItems = (product) => {
    isLoggedIn ? addCartItems(product) : navigate("/login");
  };
  const removeCartProducts = () => {
    setCartProducts([]);
  };
  return (
    <CartContext.Provider
      value={{
        handleAddCartItems,
        cartProducts,
        setCartProducts,
        addCartItems,
        isCartProductPresent,
        removeCartHandler,
        discount,
        setDiscount,
        qty,
        grandTotal,
        totalPrice,
        removeCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
