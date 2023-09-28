import React, { useState } from "react";
import { axiosInstance } from "../api/axiosConfig";
import styles from "../home/newproduct.module.css";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setData({ ...data, image: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    axiosInstance
      .post("/products")
      .then((res) => {
        setData(res.data);
        alert("User updated successfully!");
        navigate("/");
      })
      .catch(() => {
        alert("Error occurred while deleting the user");
      });
  };

  return (
    <div className={styles.inputContainer}>
      <img src={data.image} />
      <label htmlFor="name">Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={data.name}
        onChange={handleInputChange}
        placeholder="Name here.........."
      />
      <label htmlFor="category">Category</label>
      <input
        className={styles.input}
        type="category"
        name="category"
        value={data.category}
        onChange={handleInputChange}
        placeholder="abc..."
      />
      <label htmlFor="description">Description</label>
      <input
        className={styles.input}
        type="description"
        name="description"
        value={data.password}
        onChange={handleInputChange}
        placeholder="good for...."
      />
      <label htmlFor="price">PRICE</label>
      <input
        className={styles.input}
        type="number"
        name="price"
        value={data.price}
        onChange={handleInputChange}
        placeholder="--"
      />
      <label htmlFor="image">Image</label>
      <input
        className={styles.image}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button className={styles.add} onClick={handleAdd}>
        {" "}
        ADD
      </button>
    </div>
  );
}

export default NewProduct;
