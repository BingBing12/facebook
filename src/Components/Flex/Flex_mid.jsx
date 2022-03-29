import React from "react";
import styles from "./flex.module.css";
const Flex_mid = (props) => {
  return <div className={styles.center}>{props.children}</div>;
};
export default Flex_mid;
