import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/RootLayout/Navbar/Navbar";
import FiltersComponent from "../../components/UI/FiltersComponent/FiltersComponent";

import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ProductPage.css";
import "./ProductCard.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { handleAddCartItems, cartProducts, isCartProductPresent } =
    useContext(CartContext);
  console.log("cart", cartProducts);
  const { isWishlistProductPresent, handleAddWishlistItems } =
    useContext(WishlistContext);
  const { filteredPriceProducts } = useContext(ProductContext);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <Navbar />
      <div className="products-and-filters">
        <FiltersComponent />
        <div className="products-display-section">
          {filteredPriceProducts.map((product) => {
            const { _id, img, originalPrice, price, rating, name, author } =
              product;
            const discount = ((originalPrice - price) / originalPrice) * 100;
            return (
              <div className="book-card" key={_id}>
                <div className="book-cover">
                  <img
                    src={img}
                    alt="kitaabKiTasveer"
                    onClick={() => handleProductClick(_id)}
                  />
                </div>

                <div className="book-basic-details">
                  <p className="book-title">{name}</p>
                  <p className="book-author">{author}</p>
                </div>

                <p className="book-rating">{rating}★</p>
                <p className="book-price">
                  ₹{price} <s>₹{originalPrice} </s>
                  <span> ({discount.toPrecision(2)}% OFF)</span>
                </p>
                {isCartProductPresent(_id) ? (
                  <Link to="/cart">
                    <button className="book-add-to-cart">
                      Go to Cart <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </Link>
                ) : (
                  <button
                    className="book-add-to-cart"
                    onClick={() => handleAddCartItems(product)}
                  >
                    Add to Cart <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                )}
                {isWishlistProductPresent(_id) ? (
                  <Link to="/wishlist">
                    <button className="book-add-to-wishlist">
                      Go to Wishlist{" "}
                      <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => {
                          navigate("/wishlist");
                        }}
                      />
                    </button>
                  </Link>
                ) : (
                  <button
                    className="book-add-to-wishlist"
                    onClick={() => handleAddWishlistItems(product)}
                  >
                    Add to Wishlist <FontAwesomeIcon icon={faHeart} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
