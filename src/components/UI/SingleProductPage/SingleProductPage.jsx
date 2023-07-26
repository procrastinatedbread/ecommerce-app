import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBoltLightning,
  faTag,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./SingleProductPage.css";
import { WishlistContext } from "../../../context/WishlistContext";
import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../../../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../RootLayout/Navbar/Navbar";

const SingleProductPage = () => {
  const { handleAddWishlistItems, isWishlistProductPresent } =
    useContext(WishlistContext);
  const { handleAddCartItems, isCartProductPresent } = useContext(CartContext);
  const { productId } = useParams();
  const { product, setProduct } = useContext(ProductContext);
  const getProductDetails = async () => {
    try {
      const resp = await fetch(`/api/products/${productId}`);
      if (resp.status === 200) {
        const data = await resp.json();
        console.log("getProductDetails");
        setProduct(data.product);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProductDetails();
  }, []);

  const discount =
    ((product?.originalPrice - product?.price) / product?.originalPrice) * 100;
  const handleAddToCart = () => {
    handleAddCartItems(product); // Pass the product ID to the cart context function
  };

  const handleAddToWishlist = () => {
    handleAddWishlistItems(product); // Pass the product ID to the wishlist context function
    console.log("wishlist main jata hua product", product);
  };
  return (
    <>
      <Navbar />
      <div className="single-product-card">
        <div className="single-product-card-book-cover">
          <img
            className="single-product-card-book-cover-image"
            src={product?.img}
            alt="kitaabKiTasveer"
          />
        </div>
        <div className="single-product-card-book-details">
          <div className="single-product-card-book-basic-details">
            <h3 className="single-product-card-book-title">{product?.name}</h3>
            <p className="single-product-card-book-author">
              {product?.rating} <FontAwesomeIcon icon={faStar} />
            </p>
            {/* <p className="single-product-card-book-author">Book author</p> */}
          </div>
          <div className="single-product-card-price">
            <p className="single-product-card-book-price">
              ₹{product?.price} <s>₹{product?.originalPrice} </s>
              <span> ({discount.toPrecision(2)}% OFF)</span>
            </p>
          </div>
          <p className="hurry-statement">
            <FontAwesomeIcon icon={faBoltLightning} /> Hurry, a few left!
          </p>
          <hr />
          <div className="single-product-card-product-features">
            <p>
              <FontAwesomeIcon icon={faTag} /> Fastest Delivery
            </p>
            <p>
              <FontAwesomeIcon icon={faTag} /> Inclusive of All Taxes
            </p>
            <p>
              <FontAwesomeIcon icon={faTag} /> Cash On Delivery Available
            </p>
          </div>
          <hr />
          <div className="single-product-details">
            <p>
              <i>Author</i>: {product?.author}
            </p>
            <p>
              <i>Category</i>: {product?.categoryName}
            </p>
            <p>
              <i>Binding</i>: {product?.binding}
            </p>
            <p>
              <i>Language</i>: English
            </p>
          </div>
          {isCartProductPresent(product?._id) ? (
            <Link to="/cart">
              <button>
                Go to Cart <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
          ) : (
            <button
              className="single-product-add-to-cart"
              onClick={handleAddToCart}
            >
              Add to Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
          )}
          {isWishlistProductPresent(product?._id) ? (
            <Link to="/wishlist">
              <button>
                Go to wishlist <FontAwesomeIcon icon={faHeart} />
              </button>
            </Link>
          ) : (
            <button
              className="single-product-add-to-wishlist"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist <FontAwesomeIcon icon={faHeart} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
