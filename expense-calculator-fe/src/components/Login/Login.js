import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";
import * as actionTypes from "../../store/actionTypes";

class Login extends Component {

  constructor() {
    super();
    //Set default message
    this.state = {
      email: "",
      password: ""
    }
  }
  handleChangeEmail = e => {


    this.setState({ email: e.target.value });

  };

  handleChangePass = e => {

    this.setState({ password: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    var bodyFormData = {
      "email": this.state.tmpEmail,
      "password": this.state.tmpPass
    }
    // axios.post('http://localhost:8080/api/authenticate', bodyFormData)
    fetch('http://localhost:8080/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 200) {
          console.log("USPESHNO");
          console.log(res.cookies);
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again Goran');
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <div className="main">
            <form onSubmit={this.onSubmit}>
              <label for="email">E-mail: </label>
              <input
                className="border-radius form-input"
                type="text"
                name="email"
                onChange={this.handleChangeEmail}
                value={this.state.tmpEmail}
              />
              <br />
              {
                this.props.errEmail !== '' ? <p>{this.props.errEmail}</p> : null
              }
              <label for="pass">Password:</label>
              <input
                className="border-radius form-input"
                type="password"
                name="pass"
                onChange={this.handleChangePass}
              />

              <input
                className="border-radius button-solid"
                type="submit"
                value="SIGN IN"
              />

            </form>

          </div>

          <div className="text-holder">
            <p>
              Or if you don't have account{" "}
              <NavLink exact to="/register">
                register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
