import { createContext, useEffect, useReducer, useState } from "react";

export const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategories: action.payload };
    case "SET_SELECTED_PRICE":
      return { ...state, selectedPrice: action.payload };
    case "SET_SELECTED_RATING":
      return { ...state, selectedRating: action.payload };
    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        selectedCategories: [],
        selectedPrice: null,
        selectedRating: null,
        sortOrder: null,
      };
    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(productReducer, {
    searchText: "",
    selectedCategories: [],
    selectedPrice: null,
    selectedRating: null,
    sortOrder: null,
  });
  const loadProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (response.status === 200) {
        const data = await response.json();
        setProducts(data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);
  const searchedProducts =
    state.searchText !== ""
      ? products.filter(({ name }) =>
          name.toLowerCase().includes(state.searchText.toLowerCase())
        )
      : products;
  const filteredProducts =
    state?.selectedCategories?.length > 0
      ? searchedProducts.filter(({ categoryName }) =>
          state.selectedCategories.includes(categoryName)
        )
      : searchedProducts;
  const sortedProducts =
    state.sortOrder !== null
      ? filteredProducts.sort((a, b) =>
          state.sortOrder === "HTL" ? b.price - a.price : a.price - b.price
        )
      : filteredProducts;
  const productsRating = state.selectedRating
    ? sortedProducts.filter(({ rating }) => rating >= state.selectedRating)
    : sortedProducts;
  const filteredPriceProducts = state.selectedPrice
    ? productsRating.filter(({ price }) => price <= state.selectedPrice)
    : productsRating;
  return (
    <ProductContext.Provider
      value={{ state, dispatch, product, setProduct, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
