import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, totalPrice, dispatch } = useCart();

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.heading}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Your cart is empty.</h2>

            <Link to="/" className={styles.shopBtn}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <div className={styles.summary}>
              <h2>Order Summary</h2>

              <div className={styles.total}>
                <span>Total</span>

                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                className={styles.clearBtn}
                onClick={() =>
                  dispatch({ type: "CLEAR_CART" })
                }
              >
                Clear Cart
              </button>

              <Link
                to="/checkout"
                className={styles.checkoutBtn}
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;