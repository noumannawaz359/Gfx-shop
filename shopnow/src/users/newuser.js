import React from "react";
import styles from "../users/user.module.css";

function NewUser({ userDetail }) {
  return (
    <div className={styles.container}>
      <h1>{userDetail?.name?.firstname + userDetail?.name?.lastname} </h1>
      <h3>{"Username:" + userDetail?.username}</h3>
      <h4>{"Email:" + userDetail?.email}</h4>
      <h6>{"phone no:" + userDetail.phone}</h6>
      <h6>{userDetail?.address?.city + userDetail?.address?.street}</h6>
      <h6>{"ZipCode:" + userDetail?.address?.zipcode}</h6>
      <p>
        {"latitude:" + userDetail?.address?.geolocation?.lat}
        {"longitude:" + userDetail?.address?.geolocation?.long}
      </p>
    </div>
  );
}

export default NewUser;
