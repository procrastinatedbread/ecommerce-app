// import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

// import "../Cart/CartItemsCard.css";
// import { CartContext } from "../../../context/CartContext";
// import { WishlistContext } from "../../../context/WishlistContext";
// import axios from "axios";

// const CartItemsCard = ({ product }) => {
//   const { cartProducts, setCartProducts, removeCartHandler } =
//     useContext(CartContext);
//   const { isWishlistProductPresent, addWishlistItems } =
//     useContext(WishlistContext);
//   const {
//     _id: productId,
//     img,
//     name,
//     author,
//     price,
//     rating,
//     qty,
//     originalPrice,
//   } = product;
//   const changeQuantityHandler = (productId, actionType) => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         `/api/user/cart/${productId}`,
//         {
//           action: {
//             type: actionType,
//           },
//         },
//         {
//           headers: {
//             authorization: `bearer ${token}`,
//           },
//         }
//       )
//       .then((resp) => {
//         // console.log(resp.data.cart);
//         setCartProducts(resp.data.cart);
//       })
//       .catch((e) => console.error(e));
//   };
//   const discount = ((originalPrice - price) / originalPrice) * 100;

//   return (
//     <div className="card-items-card">
//       <div className="cart-items-card-book-cover">
//         <img
//           className="cart-items-card-book-cover-image"
//           src={img}
//           alt="kitaabKiTasveer"
//         />
//       </div>
//       <div className="cart-items-card-book-basic-details">
//         <p className="cart-items-card-book-title">{name}</p>
//         <p className="cart-items-card-book-author">{author}</p>
//       </div>
//       <p className="cart-items-card-book-price">
//         ₹{price} <s>₹{originalPrice} </s>
//         <span> ({discount.toPrecision(2)}% OFF)</span>
//       </p>
//       <div className="cart-items-card-quantity-builder">
//         <button onClick={() => changeQuantityHandler(productId, "decrement")}>
//           -
//         </button>{" "}
//         {qty}{" "}
//         <button onClick={() => changeQuantityHandler(productId, "increment")}>
//           +
//         </button>
//       </div>
//       {/* {isWishlistProductPresent(productId)?():()} */}
//       <button
//         className="cart-items-card-add-to-cart"
//         onClick={() => {
//           addWishlistItems(product);
//           removeCartHandler(productId);
//         }}
//       >
//         Move to Wishlist <FontAwesomeIcon icon={faHeart} />
//       </button>
//       <button
//         className="cart-items-card-remove-from-cart"
//         onClick={removeCartHandler(productId)}
//       >
//         Remove from cart <FontAwesomeIcon icon={faTrash} />
//       </button>
//     </div>
//   );
// };

// export default CartItemsCard;
