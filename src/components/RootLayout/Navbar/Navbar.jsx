import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(() => localStorage.getItem("token"));
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
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
