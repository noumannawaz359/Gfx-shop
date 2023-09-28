import React, { useEffect, useState } from "react";
import DetailItems from "./detailitems";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/axiosConfig";

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Error occurred");
      });
  }, []);

  return <DetailItems detail={data} />;
}

export default Detail;
