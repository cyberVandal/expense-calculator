import React from "react";
import classes from "./Login.module.css";
import {NavLink} from 'react-router-dom';

function Login() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.column}>
        <div className={classes.main}>
          <form>
            <label for="email">E-mail:</label>
            <input
              className={`${classes.borderRadius} ${classes.formInput}`}
              type="text"
              name="email"
            />
            <br />
            <label for="pass">Password:</label>
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
            Or if you don't have account{" "} <NavLink  exact  to="/register">register</NavLink>         
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
