import React, { useEffect, useState } from "react";
import styles from "../navbar/navbar.module.css";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../api/token";

function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  const [prevScrollPos, setPrevScrollPos] = useState(20);
  const [bgColor, setBgColor] = useState("transparent");

  const handleHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleNavigate = () => {
    navigate("/addcart");
  };

  const handleUsers = () => {
    navigate("/users");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const handleLogout = () => {
    alert("Are you sure yo want to logout!");
    removeToken();
    navigate("/");
  };

  const handleLike = () => {
    alert("you like that page");
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < prevScrollPos) {
      if (Number(currentScrollPos) > 550) {
        setBgColor("grey");
      } else {
        setBgColor("transparent");
      }
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={styles.navbar}
      style={{
        background: bgColor,
        color: "white",
        transition: "  0.3s ease",
      }}
    >
      <div className={styles.logo}>
        <button>
          <i class="fa-brands fa-facebook"></i>
        </button>

        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>

        <button>
          <i class="fa-brands fa-linkedin"></i>
        </button>
      </div>{" "}
      <div className={styles.before}>
        <button className={styles.button} onClick={handleHome}>
          Home
        </button>
        <button className={styles.button} onClick={handleContact}>
          CONTACT US
        </button>
        {isAuthenticated ? (
          <button className={styles.button} onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className={styles.button} onClick={handleLogin}>
            LOGIN
          </button>
        )}
      </div>
      <label className={styles.brand} href="&">
        GFX SHOP
      </label>
      <div className={styles.after}>
        <button className={styles.button}>Change in item </button>
        <button className={styles.button} onClick={handleUsers}>
          USERS
        </button>
        <button className={styles.button} onClick={handleNavigate}>
          <i class=" fa fa-solid fa-cart-shopping"></i>
        </button>
        <button className={styles.button} onClick={handleLike}>
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
