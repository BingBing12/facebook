import React from "react";
import Flex_start from "../Flex/Flex_start";
import Socials from "./Socials";
import styles from "./content.module.css";

const Content = () => {
  return (
    <Flex_start>
      <div className={styles.content}>left</div>
      <div className={styles.content_mid}>
        <Socials />
      </div>
      <div className={styles.content}>right</div>
    </Flex_start>
  );
};
export default Content;
