import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import useProduct from "../../hooks/useProduct";
import { useCart } from "../../context/CartContext";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { product, loading, error } = useProduct();
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <LoadingSkeleton count={1} />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className={styles.message}>
          <h2>{error}</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.imageSection}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <h1>{product.title}</h1>

            <p className={styles.category}>
              Category: {product.category}
            </p>

            <div className={styles.rating}>
              ⭐ {product.rating.rate} ({product.rating.count} Reviews)
            </div>

            <h2 className={styles.price}>
              ${product.price.toFixed(2)}
            </h2>

            <p className={styles.description}>
              {product.description}
            </p>

            <button
              className={styles.button}
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;