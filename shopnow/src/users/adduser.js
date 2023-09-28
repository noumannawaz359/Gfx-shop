import React, { useState } from "react";
import { axiosInstance } from "../api/axiosConfig";
import styles from "../users/add.module.css";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAdd = () => {
    axiosInstance
      .post("/users")
      .then((res) => {
        setData(res.data);
        alert("User updated successfully!");
        navigate("/users");
      })
      .catch(() => {
        alert("Error occurred while deleting the user");
      });
  };

  //   const locate = navigator.geolocation.getCurrentPosition();
  //   console.log(locate);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="name">First Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={data.firstname}
        onChange={handleInputChange}
        placeholder="Name here.........."
      />
      <label htmlFor="name">Last Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={data.lastname}
        onChange={handleInputChange}
        placeholder="Name here.........."
      />
      <label htmlFor="username">Username</label>
      <input
        className={styles.input}
        type="username"
        name="username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="abc...."
      />
      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="**********"
      />
      <label htmlFor="number">Phone number</label>
      <input
        className={styles.input}
        type="phone number"
        name="number"
        value={data.number}
        onChange={handleInputChange}
        placeholder="-----------"
      />
      <label htmlFor="city">City Name</label>
      <input
        className={styles.input}
        type="text"
        name="city"
        value={data.city}
        onChange={handleInputChange}
        placeholder="city here.........."
      />
      <button className={styles.add} onClick={handleAdd}>
        {" "}
        ADD
      </button>
    </div>
  );
}

export default AddUser;
