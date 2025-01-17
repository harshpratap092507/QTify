import React from "react";
import styles from "./button.module.css";

const Button = ({ children }) => {
  return (
    <button type="submit" className={styles.Feedback_container}>
      {children}
    </button>
  );
};

export default Button;
