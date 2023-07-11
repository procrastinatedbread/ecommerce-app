import React from "react";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import WishlistCard from "../../components/UI/WishlistCard/WishlistCard";
import Footer from "../../components/RootLayout/Footer/Footer";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div className="wishlist-section">
        <WishlistCard />
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
