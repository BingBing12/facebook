import React from "react";
import styles from "./signUp.module.css";
import Card from "../Card/Card";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <Card>
        <p>Sign Up</p>
        <p>It's quick and easy</p>
      </Card>
    </div>
  );
};
export default SignUp;
