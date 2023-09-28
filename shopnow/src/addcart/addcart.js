import React, { useEffect, useState } from "react";
import styles from "../addcart/addcart.module.css";
import CartItems from "./cartitems";
import { axiosInstance } from "../api/axiosConfig";

function AddCart() {
  const [data, setData] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/carts")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(() => {
        alert("Error occurred");
      });
  }, []);

  return (
    <div className={styles.blogList}>
      {data?.map((item) => (
        <CartItems cart={item} key={item.id} />
      ))}
    </div>
  );
}

export default AddCart;
