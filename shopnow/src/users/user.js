import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../users/user.module.css";
import UpdateUser from "./updateuser";

function User() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/adduser");
  };

  return (
    <>
      <div>
        <h3 className={styles.tag}> USERS </h3>
        <button className={styles.add} onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div>
        <UpdateUser />
      </div>
    </>
  );
}

export default User;
