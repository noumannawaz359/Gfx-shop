import React, { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosConfig";
import NewUser from "./newuser";
import styles from "../users/user.module.css";
import { useParams } from "react-router-dom";

function SingleUser() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Error occurred");
      });
  }, []);

  return (
    <div className={styles.single}>
      <NewUser userDetail={data} />
    </div>
  );
}

export default SingleUser;
