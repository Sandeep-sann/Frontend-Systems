import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  logoutUser,
  isAuthenticated,
  getCurrentUser,
} from "../../helpers/auth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const { totalItems } = useCart();

  const loggedIn = isAuthenticated();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          ShopSphere
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Cart
            <span className={styles.badge}>
              {totalItems}
            </span>
          </NavLink>

          {loggedIn ? (
            <>
              <span className={styles.userName}>
                👋 {user?.name}
              </span>

              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Checkout
              </NavLink>

              <button
                className={styles.logoutBtn}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;