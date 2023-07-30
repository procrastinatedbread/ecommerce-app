import React, { useContext, useState } from "react";
import "./FiltersComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";

const FiltersComponent = () => {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="filters-input">
      <div className="filters-input-header">
        <h3>Filters</h3>
        <button
          className="filters-clear"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            console.log("clear");
          }}
        >
          <FontAwesomeIcon icon={faTrash} /> Clear
        </button>
      </div>
      <PriceSelector
        onPriceChange={(price) =>
          dispatch({ type: "SET_SELECTED_PRICE", payload: price })
        }
      />
      <CategorySelector
        onCategoryChange={(categories) =>
          dispatch({ type: "SET_SELECTED_CATEGORY", payload: categories })
        }
      />
      <RatingSelector
        state={state}
        onRatingChange={(rating) =>
          dispatch({ type: "SET_SELECTED_RATING", payload: rating })
        }
      />
      <SortOrderSelector
        state={state}
        onSortOrderChange={(sortOrder) =>
          dispatch({ type: "SET_SORT_ORDER", payload: sortOrder })
        }
      />
    </div>
  );
};

function PriceSelector({ onPriceChange }) {
  return (
    <>
      <div className="price-slider">
        <input
          type="range"
          min="100"
          max="1000"
          steps="500"
          onChange={(e) => onPriceChange(e.target.value)}
        />
      </div>

      <div className="price-range">
        <p>100</p>
        <p>500</p>
        <p>1000</p>
      </div>
    </>
  );
}
function CategorySelector({ onCategoryChange }) {
  const { state } = useContext(ProductContext);
  const handleCategoryChange = (categoryName) => {
    const updatedCategories = state.selectedCategories.includes(categoryName)
      ? state.selectedCategories.filter((cat) => cat !== categoryName)
      : [...state.selectedCategories, categoryName];
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="category-filter">
      <h3>Category</h3>
      <label htmlFor="fiction">
        <input
          type="checkbox"
          name="fiction"
          id="fiction"
          checked={state.selectedCategories.includes("fiction")}
          value="fiction"
          onChange={() => handleCategoryChange("fiction")}
        />{" "}
        Fiction
      </label>

      <label htmlFor="non-fiction">
        <input
          type="checkbox"
          name="non-fiction"
          id="non-fiction"
          checked={state.selectedCategories.includes("non-fiction")}
          value="non-fiction"
          onChange={() => handleCategoryChange("non-fiction")}
        />{" "}
        Non-Fiction
      </label>

      <label htmlFor="self-help">
        <input
          type="checkbox"
          name="self-help"
          id="self-help"
          checked={state.selectedCategories.includes("self-help")}
          value="self-help"
          onChange={() => handleCategoryChange("self-help")}
        />{" "}
        Self help
      </label>
    </div>
  );
}
function RatingSelector({ onRatingChange, state }) {
  return (
    <div className="ratings-filter">
      <h3>Ratings</h3>
      <label htmlFor="one-star-and-above">
        <input
          type="radio"
          name="ratings"
          id="one-star-and-above"
          checked={state.selectedRating === "1"}
          value="1"
          onChange={(e) => onRatingChange(e.target.value)}
        />{" "}
        1 star and above
      </label>

      <label htmlFor="two-stars-and-above">
        <input
          type="radio"
          name="ratings"
          id="two-stars-and-above"
          checked={state.selectedRating === "2"}
          value="2"
          onChange={(e) => onRatingChange(e.target.value)}
        />{" "}
        2 stars and above
      </label>

      <label htmlFor="three-stars-and-above">
        <input
          type="radio"
          name="ratings"
          id="three-stars-and-above"
          checked={state.selectedRating === "3"}
          value="3"
          onChange={(e) => onRatingChange(e.target.value)}
        />{" "}
        3 stars and above
      </label>

      <label htmlFor="four-stars-and-above">
        <input
          type="radio"
          name="ratings"
          id="four-stars-and-above"
          checked={state.selectedRating === "4"}
          value="4"
          onChange={(e) => onRatingChange(e.target.value)}
        />{" "}
        4 stars and above
      </label>
    </div>
  );
}
function SortOrderSelector({ onSortOrderChange, state }) {
  return (
    <div className="price-filter">
      <h3>Sort by</h3>
      <label htmlFor="price-low-to-high">
        <input
          type="radio"
          name="price"
          id="price-low-to-high"
          value="LTH"
          checked={state.sortOrder === "LTH"}
          onChange={(e) => onSortOrderChange(e.target.value)}
        />{" "}
        Price-Low to High
      </label>

      <label htmlFor="price-high-to-low">
        <input
          type="radio"
          name="price"
          id="price-high-to-low"
          value="HTL"
          checked={state.sortOrder === "HTL"}
          onChange={(e) => onSortOrderChange(e.target.value)}
        />{" "}
        Price- High to low
      </label>
    </div>
  );
}

export default FiltersComponent;
