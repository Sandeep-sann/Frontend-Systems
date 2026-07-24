import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.section}>
          <h2 className={styles.logo}>ShopSphere</h2>
          <p>
            Your one-stop destination for electronics, fashion, jewelry, and
            more. Shop smart. Shop easy.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h3>Contact</h3>

          <p>Email: support@shopsphere.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Hyderabad, India</p>
        </div>

        {/* Social */}
        <div className={styles.section}>
          <h3>Follow Us</h3>

          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {year} ShopSphere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;