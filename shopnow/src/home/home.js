import React, { useState } from "react";
import styles from "../home/home.module.css";
import { useNavigate } from "react-router-dom";
import ShopItems from "./shopitems";
import Bar from "../components/bar/bar";
import Footer from "../components/footer/footer";

function Home() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/newproduct");
  };

  return (
    <>
      <header className={styles.main}>
        <div className={styles.header}>
          <h2> Good Morning </h2>
          <h1>Shopping EveryTime</h1>
          <div>
            <button className={styles.add} onClick={handleNewProduct}>
              ADD PRODUCT
            </button>
          </div>
        </div>
      </header>
      <Bar />
      <h3 className={styles.tag}>PRODUCTS </h3>
      <ShopItems list={data} />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
