import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { AuthContext } from "../../../context/AuthContext";
import { WishlistContext } from "../../../context/WishlistContext";
import { ProductContext } from "../../../context/ProductContext";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { state: productState, dispatch } = useContext(ProductContext);
  const { cartProducts, removeCartProducts } = useContext(CartContext);
  const { removeWishlistProducts, state } = useContext(WishlistContext);
  const { logOutHandler, token, isLoggedIn } = useContext(AuthContext);

  const removeProductsHandler = () => {
    logOutHandler();
    removeCartProducts();
    removeWishlistProducts();
  };

  console.log(state);
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          KitaabGanj
        </NavLink>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search your Book"
            className="navbar-search-section"
            value={productState.searchText}
            onChange={(e) => {
              dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
            }}
          />
          {/* <button className="navbar-search-button">Search</button> */}
        </div>

        <ul className="navbar-links">
          <li>
            {isLoggedIn ? (
              <NavLink to="/">
                <button
                  className="login-logout-button"
                  onClick={removeProductsHandler}
                >
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="login-logout-button">Login</button>
              </NavLink>
            )}
          </li>
          <li>
            {" "}
            <NavLink to="/wishlist" className="navbar-link">
              Wishlist ({state.wishListProducts.length})
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link">
              Cart({cartProducts.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-link">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
