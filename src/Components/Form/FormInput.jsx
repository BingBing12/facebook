import React from "react";
import styles from "./form.module.css";

const FormInput = (props) => {
  return <input className={styles.form} {...props} onChange={props.onChange} />;
};
export default FormInput;
