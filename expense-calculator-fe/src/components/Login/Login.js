import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";
import * as actionTypes from "../../store/actionTypes";

class Login extends Component {

  constructor() {
    super();
    //Set default message
    this.state = {
      clicked: false,
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
    console.log(this.state.email);
    //this.setState({ clicked: true });
    var bodyFormData = {
      "email": this.state.email,
      "password": this.state.password
    }
    // fetch('http://localhost:8080/api/authenticate', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   credentials: 'include'
    // })
    axios.post('http://127.0.0.1:8080/api/authenticate', bodyFormData)
      .then(res => {
        if (res.status === 200) {
          console.log("USPESHNO");
          this.props.setUserName(this.state.email);
          this.props.history.push('/products');
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
    // if (this.state.clicked === true) {
    //   return <Redirect to='/products' />
    // }
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
                value={this.state.email}
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

const mapStateToProps = state => {
  return {
    prods: state.products,
    sectionStatus: state.sectionStatus,
    alertStatus: state.alertStatus,
    deleteId: state.deleteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserName: user => dispatch(actionTypes.setUserName(user))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);