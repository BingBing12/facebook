import React from "react";
import styles from "./flex.module.css";
const Flex_start = (props) => {
  return <div className={styles.start}>{props.children}</div>;
};
export default Flex_start;
