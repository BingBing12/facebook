import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
  return (
    <input className={styles.search} placeholder={props.placeholder}></input>
  );
};
export default Search;
