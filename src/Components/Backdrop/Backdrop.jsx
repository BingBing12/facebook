import React from "react";
import styles from "./backdrop.module.css";

const Backdrop = ({ ...props }) => {
  return <div className={styles.backdrop} {...props}></div>;
};
export default Backdrop;
