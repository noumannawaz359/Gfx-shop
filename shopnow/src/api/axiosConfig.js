import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export { instance as axiosInstance, setAuthToken };
