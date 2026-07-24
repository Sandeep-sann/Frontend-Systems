import React from "react";
import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = ({ count = 8 }) => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}></div>

          <div className={styles.content}>
            <div className={styles.title}></div>
            <div className={styles.text}></div>
            <div className={styles.textSmall}></div>

            <div className={styles.bottom}>
              <div className={styles.price}></div>
              <div className={styles.button}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;