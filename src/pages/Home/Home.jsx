import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/RootLayout/Footer/Footer";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import CategoriesCard from "../../components/UI/CategoriesCard/CategoriesCard";
import { ProductContext } from "../../context/ProductContext";
import "./Home.css";

const Home = () => {
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  // const location = useLocation()
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const loadCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (response.status === 200) {
        const data = await response.json();
        const categories = data.categories;
        setCategories(categories);
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const clickHandler = () => {
    navigate("/products");
  };

  const handleCategoryChange = (categoryName) => {
    dispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: [categoryName],
    });
    navigate("/products");
  };
  return (
    <div>
      <Navbar />
      {isLoading && <p>Loading...</p>}
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
          {!isLoading &&
            categories.map((category) => {
              const { _id, categoryName, description, categoryAltName } =
                category;

              return (
                <div
                  className="category-card"
                  key={_id}
                  onClick={() => handleCategoryChange(categoryName)}
                >
                  <h1 className="category-title">{categoryAltName}</h1>
                  <p className="category-description">{description}</p>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
