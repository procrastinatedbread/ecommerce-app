import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";
import { NavLink, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id: productId,
    img,
    name,
    author,
    price,
    rating,
    originalPrice,
  } = product;
  const navigate = useNavigate();
  const { handleAddCartItems, cartProducts, isCartProductPresent } =
    useContext(CartContext);
  // console.log("cart", cartProducts);
  const { isWishlistProductPresent, handleAddWishlistItems } =
    useContext(WishlistContext);
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  const discount = ((originalPrice - price) / originalPrice) * 100;
};

export default ProductCard;
