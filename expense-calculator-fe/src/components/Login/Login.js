import React from "react";
import "../../css/Global.css"
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="wrapper">
      <div className="column">
        <div className="main">
          <form>
            <label for="email">E-mail:</label>
            <input
              className="border-radius form-input"
              type="text"
              name="email"
            />
            <label for="pass">Password:</label>
            <input
              className="border-radius form-input"
              type="password"
              name="pass"
            />
            <NavLink exact to="/products">
              <input
                className="border-radius button-solid"
                type="submit"
                value="SIGN IN"
              />
            </NavLink>

          </form>
        </div>
        <div className="text-holder">
          <p>
            Or if you don't have account{" "} <NavLink exact to="/register">register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
