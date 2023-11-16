import React, { memo } from "react";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Searchicon.svg";

const Search = memo((props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input className={styles.search} placeholder={props.placeholder} />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
});

export default Search;
