import React from "react";
import styles from "./SortDropdown.module.css";

const SortDropdown = ({ sortOption, onSortChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="sort" className={styles.label}>
        Sort By
      </label>

      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.select}
      >
        <option value="">Default</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="az">Name: A - Z</option>
        <option value="za">Name: Z - A</option>
      </select>
    </div>
  );
};

export default SortDropdown;