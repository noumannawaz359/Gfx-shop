import React, { useEffect, useState } from "react";
import styles from "../users/user.module.css";
import GetUser from "./getuser";
import { axiosInstance } from "../api/axiosConfig";

function UpdateUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Error occurred");
      });
  }, []);

  return (
    <div className={styles.userList}>
      {data?.map((item) => (
        <GetUser userDetail={item} key={item.id} />
      ))}
    </div>
  );
}

export default UpdateUser;
