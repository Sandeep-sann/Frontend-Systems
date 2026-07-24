import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({
  products = [],
  loading = false,
  error = null,
}) => {
  if (loading) {
    return <LoadingSkeleton count={8} />;
  }

  if (error) {
    return (
      <div className={styles.message}>
        <h2>⚠️ {error}</h2>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.message}>
        <h2>No products found.</h2>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;