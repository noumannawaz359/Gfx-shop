import React from "react";
import styles from "../addcart/addcart.module.css";

function CartItems({ cart }) {
  return (
    <>
      <div className={styles.blogItems}>
        <p className={styles.category}>{cart.date}</p>
      </div>
      <div className={styles.extra}>
        <h2>{cart?.products?.productId}</h2>

        <button className={styles.button}> Add to cart </button>
        <p className={styles.description}>{cart.description}</p>
        <div className={styles.rating}>
          <h3>{"*" + cart?.rating?.rate}</h3>
          <h3>{"Avaible stock :" + cart?.rating?.count}</h3>
        </div>
      </div>
    </>
  );
}

export default CartItems;
