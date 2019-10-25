import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";
import * as actionTypes from "../../store/actionTypes";
import logo from "./logo.png"
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

  componentDidMount() {
    if (!this.props.token && this.props.logout === true) {
      this.setState({ clicked: true })
    } else if (!this.props.token && this.props.logout === false) {
      this.setState({ clicked: false })
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

    axios.post('http://localhost:8080/api/authenticate', bodyFormData)
      .then(res => {
        if (res.status === 200) {
          console.log("USPESHNO");
          console.log(res.data.token);
          this.props.setUserName(this.state.email);
          this.props.setUserToken(res.data.token);
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

    return (
      <div className="wrapper">
        <div className="column">
          <div className="logo-container1">
             <img
                className="logo-img"
                src={logo}
                alt="Logo" 
              />
          </div>
          {this.state.clicked === false ? ("") : (<div className="text-holder">
            <p style={{color:"red"}}> 
              Please Login first!
            </p>
          </div>)}

          <div className="main">
            <form onSubmit={this.onSubmit}>
              <label>E-mail: </label>
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
              <label>Password:</label>
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
          <div className="space">

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
    deleteId: state.deleteId,
    logout: state.logout,
    token: state.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserName: user => dispatch(actionTypes.setUserName(user)),
    setUserToken: token => dispatch(actionTypes.setUserToken(token))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);