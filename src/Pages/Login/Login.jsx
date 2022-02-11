import React, { useState } from "react";

import Card from "../../Components/Card/Card";
import FormInput from "../../Components/Form/FormInput";
import Button from "../../Components/Form/Button";
import SignUp from "../../Components/Form/SignUp";
import Backdrop from "../../Components/Backdrop/Backdrop";
import styles from "./login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const onTypeHandler = (event) => {
    event.target.type === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  };
  const loginClickHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "login") {
      props.onClick(true);
    }
  };
  const newAccountClickHandler = (event) => {
    event.preventDefault();
    setNewAccount(true);
  };
  const bdropClickHandler = () => {
    setNewAccount(false);
  };
  const signUp = (newName, newEmail, newPassword) => {
    setNewAccount(false);
    console.log(newName + " added to database");
  };

  return (
    <div className={styles.login}>
      {newAccount === true && <Backdrop onClick={bdropClickHandler} />}
      {newAccount === true && (
        <SignUp signUp={signUp} clickBackdrop={bdropClickHandler} />
      )}
      <div className={styles.left}>
        <p className={styles.logo}>facebook</p>
        <p className={styles.subheading}>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <Card>
        {/* <h1>Login Page</h1> */}
        <form>
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
            color="blue"
            width="full"
            type={"submit"}
            name="login"
            onClick={loginClickHandler}
          >
            Log In
          </Button>
          <p className={styles.link}>Forgotten Password?</p>
          <hr className={styles.hr}></hr>
          <Button
            color="green"
            width="fit"
            type={"submit"}
            name="login"
            onClick={newAccountClickHandler}
          >
            Create New Account
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
