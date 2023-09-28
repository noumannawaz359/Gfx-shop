import React, { useState, useEffect } from "react";
import styles from "../timer/timer.module.css";

function Timer() {
  const [days, setDays] = useState(120);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);
      } else {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setDays((prevDays) => prevDays - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        } else if (minutes === 0 && seconds === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <>
      <div className={styles.timer}>
        <div className={styles.hours}>
          <span>{days} Days </span>
          <span> {hours} Hours </span>
          <span>{minutes} Mins</span>
          <span>{seconds} Secs</span>
        </div>
        <h3>The Classic ComeBack</h3>
        <div>
          <button className={styles.buyNow}>BUY NOW</button>
        </div>
      </div>
    </>
  );
}

export default Timer;
