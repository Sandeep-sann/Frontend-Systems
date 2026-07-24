import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className={styles.card}>
      <Link
        to={`/product/${product.id}`}
        className={styles.imageLink}
      >
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {product.title.length > 55
            ? `${product.title.substring(0, 55)}...`
            : product.title}
        </h3>

        <p className={styles.category}>
          {product.category}
        </p>

        <div className={styles.rating}>
          ⭐ {product.rating?.rate} ({product.rating?.count} Reviews)
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>
            ${product.price.toFixed(2)}
          </span>

          <button
            className={styles.button}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className={styles.detailsBtn}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;