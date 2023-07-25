import { createContext, useContext, useReducer } from "react";
import axios from "axios";

import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const WishlistContext = createContext();

const initialState = {
  wishListProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, wishListProducts: action.payload };
    case "CLEAR_WISHLIST":
      return initialState;
    default:
      return state;
  }
};
export default function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const addWishlistItems = async (product) => {
    const token = localStorage.getItem("token");

    try {
      const resp = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (resp.status === 201) {
        console.log("wishlist", resp.data.wishlist);
        dispatch({ type: "LOAD_WISHLIST", payload: resp.data.wishlist });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeWishlistHandler = async (productId) => {
    console.log("Removing item from wishlist:", productId);
    const token = localStorage.getItem("token");
    try {
      const resp = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      dispatch({ type: "LOAD_WISHLIST", payload: resp.data.wishlist });
    } catch (e) {
      console.error(e);
    }
  };

  const isWishlistProductPresent = (id) =>
    state.wishListProducts.some(
      (wishListProduct) => wishListProduct?._id === id
    );

  const handleAddWishlistItems = (product) => {
    isLoggedIn ? addWishlistItems(product) : navigate("/login");
  };

  const removeWishlistProducts = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };
  return (
    <WishlistContext.Provider
      value={{
        isWishlistProductPresent,
        state,
        dispatch,
        addWishlistItems,
        removeWishlistHandler,
        handleAddWishlistItems,
        removeWishlistProducts,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
