import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/RootLayout/Footer/Footer";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import CategoriesCard from "../../components/UI/CategoriesCard/CategoriesCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-to-products-page">
        <h1>Welcome to KitaabGanj,</h1>
        <h2>For all your reading needs</h2>
        <br />

        <NavLink className="home-to-products-page-link" to="/products">
          Shop Now{" "}
        </NavLink>
      </div>
      <div className="category-card-section">
        <h1>Featured Book Categories</h1>
        <p>
          There are many categories of books available at KitaabGanj. Choose
          your favorite one now.
        </p>
        <div className="category-card-flex">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
