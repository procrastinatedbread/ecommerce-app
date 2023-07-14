import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { logOutHandler, token, isLoggedIn } = useContext(AuthContext);
  const removeProductsHandler = () => {
    logOutHandler();
  };

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
              Wishlist
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link">
              Cart
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
