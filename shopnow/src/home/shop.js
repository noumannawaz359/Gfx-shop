import React from "react";
import styles from "../home/home.module.css";
import { useNavigate } from "react-router-dom";

function Shop({ list }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/display/${id}`);
  };

  // const background = {
  //   backgroundImage: `url(${list.image})`,
  //   backgroundSize: "15rem",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div>
      <div className={styles.productDiv}>
        <div className={styles.hideBtns}>
          <div className={styles.hoverBtns}>
            <button className={styles.heart}>
              <i className="fa-regular fa-heart "></i>
            </button>
            <button
              className={styles.buyButton}
              onClick={() => handleClick(list.id)}
            >
              <i className="fa fa-solid fa-bag-shopping"></i>
            </button>
            <button
              className={styles.heart}
              onClick={() => handleClick(list.id)}
            >
              <i class=" fa fa-light fa-eye"></i>
            </button>
          </div>
        </div>
        <img
          src={list?.image}
          onClick={() => handleClick(list.id)}
          className={styles.image}
        />
      </div>
      <div className={styles.price}>
        <p>{list.title}</p>
        <p>{"$" + list.price}</p>
      </div>
    </div>
  );
}

export default Shop;

{
  /* <div className={styles.blogItems}>
        <div
          className={styles.image}
          onClick={() => handleClick(list.id)}
          style={background}
        >
          <div className={styles.full}>
            <button className={styles.like}>
              <i className="fa-regular fa-heart "></i>
            </button>
            <button
              className={styles.buyButton}
              onClick={() => handleClick(list.id)}
            >
              <i className="fa fa-solid fa-bag-shopping"></i>
            </button>
            <button className={styles.eye} onClick={() => handleClick(list.id)}>
              <i class=" fa fa-light fa-eye"></i>
            </button>
          </div>
        </div>
        <p>{list.title}</p>
        <footer>
          <div className={styles.price}>
            <p>{"$" + list.price}</p>
          </div>
        </footer>
      </div>
    </> */
}
