import React from "react";
import styles from "./button.module.css";

const Button = ({ children }) => {
  return <div className={styles.Feedback_container}>{children}</div>;
};

export default Button;
