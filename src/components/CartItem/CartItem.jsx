import React from "react";
import styles from "./CartItem.module.css";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const increaseQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity + 1,
      },
    });
  };

  const decreaseQuantity = () => {
    if (item.quantity === 1) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item.id,
      });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          id: item.id,
          quantity: item.quantity - 1,
        },
      });
    }
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
    });
  };

  return (
    <div className={styles.cartItem}>
      <img
        src={item.image}
        alt={item.title}
        className={styles.image}
      />

      <div className={styles.details}>
        <h3>{item.title}</h3>

        <p className={styles.price}>
          ${item.price.toFixed(2)}
        </p>

        <div className={styles.quantityBox}>
          <button onClick={decreaseQuantity}>−</button>

          <span>{item.quantity}</span>

          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h3>
          ${(item.price * item.quantity).toFixed(2)}
        </h3>

        <button
          className={styles.removeBtn}
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;