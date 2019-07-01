import React from "react";
import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.column}>
        <div className={classes.main}>
          <form>
            <label for={"email"}>E-mail:</label>
            <br />
            <input
              className={`${classes.borderRadius} ${classes.formInput}`}
              type="text"
              name="email"
            />
            <br />
            <label for="pass">Password:</label>
            <br />
            <input
              className={`${classes.borderRadius} ${classes.formInput}`}
              type="password"
              name="pass"
            />
            <br />
            <input
              className={`${classes.borderRadius} ${classes.buttonSolid}`}
              type="submit"
              value="SIGN IN"
            />
          </form>
        </div>
        <div className={classes.textHolder}>
          <p>
            Or if you don't have account{" "}
            <a a href="#">
              register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
