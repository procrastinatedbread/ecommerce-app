import React from "react";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import FiltersComponent from "../../components/UI/FiltersComponent/FiltersComponent";
import ProductCard from "../../components/UI/ProductCard/ProductCard";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="products-and-filters">
        <FiltersComponent />
        <div className="products-display-section">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
