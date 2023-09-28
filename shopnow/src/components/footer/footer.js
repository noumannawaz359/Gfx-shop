import React from "react";
import styles from "../footer/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.elements}>
        <span>Home</span>
        <span>Contact</span>
        <span>Shop</span>
        <span>Add</span>
        <span>Users</span>
        <span>Login</span>
      </div>
      <div className={styles.icons}>
        <i class="  fa-brands fa-cc-paypal fa-3x"></i>
        <i class="fa-brands fa-cc-mastercard fa-3x"></i>
        <i class="fa-brands fa-cc-visa fa-3x"></i>
        <i class="fa-brands fa-cc-amex fa-3x"></i>
        <i class="fa-brands fa-cc-discover fa-3x"></i>
      </div>
      <div className={styles.last}>
        Copyright © 2023 GFX store theme. Created by 8theme – WordPress
        WooCommerce themes.
      </div>
    </div>
  );
}

export default Footer;
