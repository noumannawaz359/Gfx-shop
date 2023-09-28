import React from "react";
import styles from "../product-details/details.module.css";

function DetailItems({ detail }) {
  return (
    <>
      <div className={styles.blogList}>
        <div className={styles.container}>
          <img
            className={styles.image}
            src={detail.image}
            alt="Author Avatar"
          />
          <p className={styles.category}>{detail.category}</p>
        </div>
        <div className={styles.extra}>
          <h2>{detail.title}</h2>
          <footer>
            <div className={styles.price}>
              <h3>{"$" + detail.price}</h3>
            </div>
            <button className={styles.detailButton}> BUY </button>
            <button className={styles.detailButton}> ADD TO CART </button>
            <p className={styles.description}>{detail.description}</p>
            <div className={styles.rating}>
              <h3>{"*" + detail?.rating?.rate}</h3>
              <h3>{"Avaible stock :" + detail?.rating?.count}</h3>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default DetailItems;
