import React, { useState } from "react";
import styles from "../users/user.module.css";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosConfig";

function GetUser({ userDetail }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const userId = userDetail.id;

  const handleDelete = () => {
    axiosInstance
      .delete(`/users/${userId}`)
      .then(() => {
        const updatedData = data.filter((user) => user.id !== userId);
        setData(updatedData);
        alert("User deleted successfully!");
      })
      .catch(() => {
        alert("Error occurred while deleting the user");
      });
  };

  const handleEdit = () => {
    alert("no need");
  };

  const handleDetails = () => {
    navigate(`/singleuser/${userId}`);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>{userDetail?.name.firstname + userDetail?.name.lastname} </h1>
        <h3>{"Username:" + userDetail?.username}</h3>
        <h4>{"Email:" + userDetail?.email}</h4>
        <button className={styles.button} onClick={handleEdit}>
          Edit
        </button>
        <button className={styles.button} onClick={handleDelete}>
          {" "}
          Delete{" "}
        </button>
        <button className={styles.button} onClick={() => handleDetails(userId)}>
          {" "}
          DETAILS{" "}
        </button>
      </div>
    </>
  );
}

export default GetUser;
