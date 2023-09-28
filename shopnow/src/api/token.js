import { json } from "react-router-dom";

const TOKEN_KEY = "auth_token";

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { getToken, setToken, removeToken };
