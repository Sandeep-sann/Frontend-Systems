import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useCart } from "../../context/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart, totalPrice } = useCart();

  // Prevent checkout if cart is empty
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.checkoutGrid}>
          {/* Checkout Form */}
          <div className={styles.formSection}>
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <h2>Order Summary</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className={styles.item}
              >
                <div>
                  <h4>{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>

                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div className={styles.total}>
              <h3>Total</h3>

              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;