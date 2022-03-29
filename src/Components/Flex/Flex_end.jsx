import React from "react";
import styles from "./flex.module.css";
const Flex_end = (props) => {
  return <div className={styles.end}>{props.children}</div>;
};
export default Flex_end;
