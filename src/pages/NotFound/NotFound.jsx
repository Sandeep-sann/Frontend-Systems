import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p>
            Sorry, the page you are looking for doesn't exist
            or has been moved.
          </p>

          <Link to="/" className={styles.homeBtn}>
            Go Back Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;