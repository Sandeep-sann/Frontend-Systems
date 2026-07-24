import React from "react";
import styles from "./CategoryFilter.module.css";

const CategoryFilter = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${
          selectedCategory === "all" ? styles.active : ""
        }`}
        onClick={() => onCategoryChange("all")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            selectedCategory === category ? styles.active : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;