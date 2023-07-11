import React from "react";
import "./CategoriesCard.css";

const CategoriesCard = () => {
  return (
    <div className="category-card">
      <h1 className="category-title">Horror</h1>
      <p className="category-description">
        Meant to cause discomfort and fear for both the character and readers,
        horror writers often make use of supernatural and paranormal elements in
        morbid stories that are sometimes a little too realistic.
      </p>
    </div>
  );
};

export default CategoriesCard;
