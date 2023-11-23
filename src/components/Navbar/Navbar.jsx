import React from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import Search from "../SearchBar/Search";
import Logo from "../QtifyLogo/logo";

export default function Navbar() {
  return (
    <>
      <nav className={styles.Navbar_container}>
        <Logo />
        <Search placeholder="Search a album of your choice" />
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
}
