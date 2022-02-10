import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  if (props.color === "blue") {
    var style = styles.blue;
  }
  if (props.color === "green") {
    var style = styles.green;
  }
  if (props.width === "fit") {
    var width = styles.fit;
  }
  if (props.width === "full") {
    var width = styles.full;
  }

  return (
    <button className={`${styles.button} ${style} ${width}`} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
