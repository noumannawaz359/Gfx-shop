import React, { useState, useEffect } from "react";
import styles from "../home/home.module.css";
import { axiosInstance } from "../api/axiosConfig";
import Shop from "./shop";
import Timer from "../components/timer/timer";

function ShopItems() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Error occurred");
      });
  }, []);

  const firstTwoItems = data.slice(0, 2);
  const remainingItems = data.slice(2);

  return (
    <>
      <div className={styles.blogList}>
        <Timer />
        {firstTwoItems.map((item) => (
          <Shop list={item} key={item.id} />
        ))}
      </div>
      <div className={styles.nextList}>
        {remainingItems.map((item) => (
          <Shop list={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ShopItems;
