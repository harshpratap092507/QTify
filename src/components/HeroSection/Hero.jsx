import React from "react";
import styles from "./hero.module.css";
import { ReactComponent as HeadSet } from "../../assets/vibrating-headphone 1.svg";

export default function Hero(props) {
  return (
    <>
      <div className={styles.hero_wrapper}>
        <div className={styles.quote}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className={styles.headset}>
          <HeadSet />
        </div>
      </div>
    </>
  );
}
