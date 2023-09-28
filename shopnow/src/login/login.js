import React from "react";
import styles from "../login/login.module.css";
import { useNavigate } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
import { useForm, Controller } from "react-hook-form";
import { setToken } from "../api/token";
import { setAuthToken, axiosInstance } from "../api/axiosConfig";

function Login() {
  const { handleSubmit, control, formState } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("auth/login", {
        username: data.username,
        password: data.password,
      });

      const token = res.data;

      setAuthToken(token);
      setToken(token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={styles.input}
                  type="text"
                  placeholder="abc"
                />
              )}
              rules={{ required: true }}
              message="username is required"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={styles.input}
                  type="password"
                  placeholder="**********"
                />
              )}
              rules={{ required: true }}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button className={styles.button_login} type="submit">
            LOGIN
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}

export default Login;
