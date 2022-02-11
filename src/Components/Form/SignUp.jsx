import React, { useState } from "react";
import styles from "./signUp.module.css";
import Card from "../Card/Card";
import FormInput from "./FormInput";
import Button from "./Button";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onTypeHandler = (event) => {
    event.target.name === "name" && setName(event.target.value);
    event.target.name === "email" && setEmail(event.target.value);
    event.target.name === "password" && setPassword(event.target.value);
  };
  const newAccountClickHandler = (event) => {
    event.preventDefault();
    props.signUp(name, email, password);
  };
  const onExitHandler = (event) => {
    props.clickBackdrop();
  };

  return (
    <div className={styles.signUp}>
      <Card>
        <p className={styles.exit} onClick={onExitHandler}>
          x
        </p>
        <p className={styles.heading}>Sign Up</p>
        <p>It's quick and easy</p>
        <hr className={styles.hr}></hr>
        <form>
          <FormInput
            type={"text"}
            placeholder="Name"
            name="name"
            onChange={onTypeHandler}
            value={name}
          />
          <FormInput
            type={"email"}
            placeholder="Email address"
            name="email"
            onChange={onTypeHandler}
            value={email}
          />
          <FormInput
            type={"password"}
            placeholder="Password"
            name="password"
            onChange={onTypeHandler}
            value={password}
          />
          <Button
            color="green"
            width="full"
            type={"submit"}
            name="login"
            onClick={newAccountClickHandler}
          >
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
