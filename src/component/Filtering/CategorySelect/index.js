import React from "react";
import CategotyItem from "./CategotyItem";

export default function Category({ categories, onClick, selectedCategories }) {
  const handleClick = (categoryItem) => {
    if (selectedCategories.includes(categoryItem)) {
      onClick(selectedCategories.filter((x) => x !== categoryItem));
    } else {
      onClick(selectedCategories.concat(categoryItem));
    }
  };

  return (
    <div>
      {categories.map((categoryItem) => (
        <CategotyItem
          name={categoryItem}
          onClick={() => handleClick(categoryItem)}
          isActive={selectedCategories.includes(categoryItem)}
        />
      ))}
    </div>
  );
}
