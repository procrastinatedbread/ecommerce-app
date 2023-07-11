import React, { useState } from "react";
import "./FiltersComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FiltersComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="filters-input">
      <div className="filters-input-header">
        <h3>Filters</h3>
        <button>
          <FontAwesomeIcon icon={faTrash} /> Clear
        </button>
      </div>
      <div className="price-slider">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className="price-range">
        <p>0</p>
        <p>500</p>
        <p>1000</p>
      </div>

      <div className="category-filter">
        <h3>Category</h3>
        <label htmlFor="fiction">
          <input type="checkbox" name="fiction" id="fiction" /> Fiction
        </label>

        <label htmlFor="non-fiction">
          <input type="checkbox" name="non-fiction" id="non-fiction" />{" "}
          Non-Fiction
        </label>

        <label htmlFor="self-help">
          <input type="checkbox" name="self-help" id="self-help" /> Self help
        </label>
      </div>

      <div className="ratings-filter">
        <h3>Ratings</h3>
        <label htmlFor="one-star-and-above">
          <input type="radio" name="ratings" id="one-star-and-above" /> 1 star
          and above
        </label>

        <label htmlFor="two-stars-and-above">
          <input type="radio" name="ratings" id="two-stars-and-above" /> 2 stars
          and above
        </label>

        <label htmlFor="three-stars-and-above">
          <input type="radio" name="ratings" id="three-stars-and-above" /> 3
          stars and above
        </label>

        <label htmlFor="four-stars-and-above">
          <input type="radio" name="ratings" id="four-stars-and-above" /> 4
          stars and above
        </label>
      </div>
      <div className="price-filter">
        <h3>Sort by</h3>
        <label htmlFor="price-low-to-high">
          <input type="radio" name="price" id="price-low-to-high" /> Price-Low
          to High
        </label>

        <label htmlFor="price-high-to-low">
          <input type="radio" name="price" id="price-high-to-low" /> Price- High
          to low
        </label>
      </div>
    </div>
  );
};

export default FiltersComponent;
