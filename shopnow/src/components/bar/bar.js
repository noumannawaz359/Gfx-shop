import React from "react";
import styles from "../bar/bar.module.css";

function Bar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.logoBox}>
            <i class=" fa fa-light fa-truck fa-2x"></i>
          </div>
          <div className={styles.write}>
            <p>Fastest Shipping</p>
            <p>Order at $39 order </p>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.logoBox2}>
            <i class=" fa fa-duotone fa-credit-card fa-2x"></i>
          </div>
          <div className={styles.write2}>
            <p>100% safe payments</p>
            <p> 9 months installments </p>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.logoBox3}>
            <i class=" fa fa-light fa-shop fa-2x"></i>
          </div>
          <div className={styles.write3}>
            <p>14 Days Return </p>
            <p> Shop with confidence </p>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.logoBox4}>
            <i class="fa-brands fa-facebook-messenger fa-2x"></i>
          </div>
          <div className={styles.write4}>
            <p>24/7 Online </p>
            <p> Delivered to home </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
